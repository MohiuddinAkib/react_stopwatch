import React from 'react'

const Laps = props => {
  return (
    <div>
      <ul className="list-group mt-5">
        {props.laps.map((lap , i) => {
          return (
            <li className="list-group-item list-group-flush list-group-item-action" key={ i }>
              <h3>
                <span className="text-dark">Minute: </span>
                <span className="text-danger"> { lap.min } </span>
                <span className="text-dark"> Second: </span>
                <span className="text-danger">{ lap.sec }</span>
                <span className="text-dark"> Milisecond: </span>
                <span className="text-danger">{ lap.mili }</span>
              </h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Laps