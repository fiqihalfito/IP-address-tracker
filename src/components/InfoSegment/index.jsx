const InfoSegment = ({ title, value }) => {
    return (
        <div className="group text-center md:text-start md:px-8 py-3 relative">
            <p className="text-xs font-bold text-neutral-400 mb-1 md:mb-4 tracking-widest">{title}</p>
            <p className="text-xl md:text-2xl font-medium md:after:border after:absolute after:right-0 after:h-2/3 after:top-1/2 after:-translate-y-1/2 group-last:after:border-0">{value}</p>
        </div>
    )
}

export default InfoSegment