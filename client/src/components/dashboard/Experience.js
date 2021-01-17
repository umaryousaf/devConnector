import React, { Fragment } from 'react'
import Moment from 'react-moment'
import { deleteExperience } from '../../actions/profile'
import { connect } from 'react-redux'

const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className="hide-sm">{exp.title}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {' '}
                {exp.to === null ? (
                    ' Now '
                ) : (
                        <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
                    )}
            </td>
            <td><i className="fas fa-trash-alt" onClick={() => deleteExperience(exp._id)}></i></td>
        </tr>
    ))
    return (
        <Fragment>
            <h2 className="my-2">Experience Cerdentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    )
}

export default connect(null, { deleteExperience })(Experience)
