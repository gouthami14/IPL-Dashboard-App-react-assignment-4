// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamsData} = this.props
    const {name, imageUrl, id} = teamsData
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img src={imageUrl} alt={`${name}`} className="team-card-image" />
          <p className="team-card-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
