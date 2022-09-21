import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeamsData()
  }

  getIplTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const iplTeamsData = await response.json()
    const {teams} = iplTeamsData
    console.log(iplTeamsData)
    const updatedTeamsData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    console.log(updatedTeamsData)
    this.setState({teamsData: updatedTeamsData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <>
        <div className="app-container">
          {isLoading && (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          )}
          {!isLoading && (
            <>
              <div className="logo-title-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="ipl-logo"
                />
                <h1 className="dash-board-heading">IPL Dashboard</h1>
              </div>
              <ul className="list-teams-card-items">
                {teamsData.map(eachItem => (
                  <TeamCard key={eachItem.id} teamsDetails={eachItem} />
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    )
  }
}
export default Home
