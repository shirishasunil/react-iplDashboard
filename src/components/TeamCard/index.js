import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamsDetails} = props
  const {id, teamImageUrl, name} = teamsDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card-container">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
