const InfoSegment = ({ title, value }) => {
    return (
        <div className="text-center md:text-start md:px-8 py-3">
            <p className="text-xs font-medium text-slate-400 mb-1 md:mb-4">{title}</p>
            <p className="text-xl md:text-2xl font-medium">{value}</p>
        </div>
    )
}

export default InfoSegment