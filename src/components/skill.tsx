import React, { useState, useEffect } from 'react'
import './Skill.less'

type Skill = {
  name: string
  level: string
  color: string
}

type Color = {
  [key: string]: {
    start: string
    stop: string
  }
}

const colors: Color = {
  red: {
    start: '#F5317F',
    stop: '#FF7C6E',
  },
  purple: {
    start: '#B122E5',
    stop: '#FF63DE',
  },
  blue: {
    start: '#1270E3',
    stop: '#59C2FF',
  },
  green: {
    start: '#2CBFC7',
    stop: '#46EEAA',
  },
  orange: {
    start: '#FF8359',
    stop: '#FFDF40',
  },
}

const circumference = 52 * 2 * Math.PI
const calculateOffset = level => circumference - (level / 100) * circumference

const isInViewport = (elem) => {
  const bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const Skill: React.FunctionComponent<Skill> = ({ name, level, color }) => {
  const [offset, setOffset] = useState(circumference)

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    animate && setOffset(calculateOffset(level))
  }, [animate])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      isInViewport && setTimeout(() => setAnimate(true), 400);
    })
  }, [])

  const [number, setNumber] = useState(0)

  useEffect(
    () => {
      if (animate) {
        let count = 0
        const timeoutId = setInterval(() => {
          count < Number(level) && setNumber(number => number + 1)
          count++
        }, 0.35)
        return () => {
          count === Number(level) && clearInterval(timeoutId)
        }
      }
    },
    [animate]
  )

  return (
    <div id={`skill_${name}`} className="skill">
      <div className="skill__level">
        <svg width="120" height="120">
          <linearGradient id={`gradient-${color}`}>
            <stop stopColor={colors[color].start} offset="0" />
            <stop stopColor={colors[color].stop} offset="100%" />
          </linearGradient>
          <circle
            className="skill__bar"
            stroke={`url(#gradient-${color})`}
            strokeWidth="8"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            fill="white"
            r="52"
            cx="60"
            cy="60"
          />
        </svg>
        <span className="skill__percent">{number}%</span>
      </div>
      <p className="skill__name">{name}</p>
    </div>
  )
}

export default Skill
