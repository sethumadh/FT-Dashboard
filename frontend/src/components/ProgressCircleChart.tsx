type ProgressCircleChartProps = {
  progress: number
}

const ProgressCircleChart = ({ progress }: ProgressCircleChartProps) => {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const progressOffset = ((100 - progress) / 100) * circumference

  return (
    <div className="relative w-28 h-28">
      <svg className="absolute" viewBox="0 0 100 100">
        <circle
          className="stroke-current text-[#ffd9a0]"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="4"
          fill="none"
        />
        <circle
          className="stroke-current text-[#FBA11C]"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="4"
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progressOffset}
          transform="rotate(-90 50 50)"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-lg font-bold text-white">
          <h1 className="text-lg ">{progress}%</h1>
          <p className="text-xs">Completed</p>
        </span>
      </div>
    </div>
  )
}

export default ProgressCircleChart
