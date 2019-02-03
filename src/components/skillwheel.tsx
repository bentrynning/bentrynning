import React from 'react'
import './skillwheel.less'

type Skill = {
  name: string
  level: string
  color: string
};

type Color = {
  [key: string]: {
    start: string;
    stop: string;
  }
}

const colors: Color = {
  red: {
    start: '#F5317F',
    stop: '#FF7C6E'
  },
  purple: {
    start: '#B122E5',
    stop: '#FF63DE'
  },
  blue: {
    start: '#1270E3',
    stop: '#59C2FF'
  },
  green: {
    start: '#2CBFC7',
    stop: '#46EEAA'
  },
  orange: {
    start: '#FF8359',
    stop: '#FFDF40'
  }
}

const circumference = 52 * 2 * Math.PI
const offset = (level) => circumference - (level / 100) * circumference

const Skillwheel: React.FunctionComponent<Skill> = ({ name, level, color }) => (
  <div className="skillwheel">
    <div className="skillwheel__level">
      <svg width="120" height="120">
        <linearGradient id={`gradient-${name}`}>
          <stop stopColor={colors[color].start} offset="0"/>
          <stop stopColor={colors[color].stop} offset="100%"/>
        </linearGradient>
        <circle
          className="skillwheel__bar"
          stroke={`url(#gradient-${name})`}
          strokeWidth="8"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset(level)}
          fill="white"
          r="52"
          cx="60"
          cy="60"
        />
      </svg>
      <span className="skillwheel__percent">{level}%</span>
    </div>
    <p className="skillwheel__name">{name}</p>
  </div>
)

export default Skillwheel
