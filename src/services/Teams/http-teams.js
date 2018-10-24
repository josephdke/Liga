import { API_BASE_TEAMS, HTTP_TEAMS } from './../config'
import httpBase from './../http-base';

class HttpTeams {

    async getTeams( liga ){
        try {
            const url = `${API_BASE_TEAMS}${HTTP_TEAMS.getTeams}?s=Soccer&c=${liga}`
            const data = await httpBase.baseGet( url, {} );
            return data.teams;
        } catch( err ){
            console.log(err);
        }
    }

    async getPlayers( teamId ){
        try {
            const url = `${API_BASE_TEAMS}${HTTP_TEAMS.getPlayers}?id=${teamId}`
            console.log(url)
            const data = await httpBase.baseGet( url, {} );
            //console.log(data)
            return data.player;
        } catch( err ){
            console.log(err);
        }
    }

}

export default new HttpTeams;