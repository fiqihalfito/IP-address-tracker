"use client"
import Image from "next/image";
import arrowIcon from "../../public/images/icon-arrow.svg"
import InfoSegment from "@/components/InfoSegment";
import { useEffect, useState } from "react";
// import MyMap from "@/components/MyMap";
import 'leaflet/dist/leaflet.css'
import dynamic from "next/dynamic";

const MyMap = dynamic(() => import('@/components/MyMap'), { ssr: false })

async function getLocation(ipAddress) {
    const url = ipAddress ? `https://ipapi.co/${ipAddress}/json/` : 'https://ipapi.co/json/'
    const res = await fetch(url)
    return res.json()
}

export default function Home() {

    const [inputIP, setInputIP] = useState(null)
    const [ipData, setIpData] = useState({
        ipAddress: "-",
        location: "-",
        timezone: "-",
        isp: "-",
        latitude: 0,
        longitude: 0
    })
    const [error, setError] = useState({
        status: false,
        reason: null
    })
    const [isRendered, setIsRendered] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const data = await getLocation()
            // console.log(data);
            return handleIpData(data)

        }

        fetchData()
    }, [])

    function handleIpData(data) {

        const timezone = data.utc_offset

        return setIpData({
            ipAddress: data.ip,
            location: data.city + ", " + data.country_code + " " + (data.asn),
            timezone: timezone.slice(0, 3) + ":" + timezone.slice(3),
            isp: data.org,
            latitude: data.latitude,
            longitude: data.longitude
        })
    }

    function handleChange(e) {
        return setInputIP(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log('submitted');

        const data = await getLocation(inputIP)
        console.log(data);
        if (data.error) {
            return setError({
                status: data.error,
                reason: data.reason
            })

        }
        setError({
            status: false,
            reason: null
        })

        return handleIpData(data)
    }

    // console.log(error)

    return (
        <div className="flex flex-col h-screen font-rubik">

            <div className="h-[40%] bg-mobile md:bg-desktop bg-no-repeat bg-cover flex flex-col items-center px-8 relative ">
                <p className="py-8 text-3xl md:text-4xl font-medium text-white">IP Address Tracker</p>
                <form className="w-full md:w-1/2 relative rounded-2xl overflow-hidden">
                    <input
                        type="text"
                        name="ip"
                        placeholder="Search for any IP address or domain"
                        // value={inputIP}
                        className="py-5 px-7 text-xl w-full outline-none"
                        onChange={handleChange} />

                    <button
                        type="submit"
                        className="bg-black hover:bg-neutral-700 absolute right-0 h-full px-8"
                        onClick={handleSubmit} >
                        <Image src={arrowIcon} alt="submit button" />
                    </button>
                </form>

            </div>
            <div className="flex-grow w-screen relative" id="map">
                <div className="grid grid-flow-row md:grid-cols-4 md:w-3/4 rounded-2xl justify-center py-4 bg-white absolute top-0 left-0 right-0 md:left-1/2 md:right-autox -translate-y-1/2 md:-translate-x-1/2 z-50 mx-8 md:mx-0">
                    {!error.status &&
                        <>
                            <InfoSegment title={'IP ADDRESS'} value={ipData.ipAddress} />
                            <InfoSegment title={'LOCATION'} value={ipData.location} />
                            <InfoSegment title={'TIMEZONE'} value={"UTC " + ipData.timezone} />
                            <InfoSegment title={'ISP'} value={ipData.isp} />
                        </>
                    }
                    {error.status && <InfoSegment title={'Error'} value={error.reason} />}
                </div>

                <MyMap center={[ipData.latitude, ipData.longitude]} lat={ipData.latitude} long={ipData.longitude} />


            </div>
        </div>
    )
}
