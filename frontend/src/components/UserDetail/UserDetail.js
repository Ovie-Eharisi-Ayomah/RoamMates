import "../app/App.css"
import "../UserDetail/UserDetail.css"

const UserDetail = ({navigate}) => {
    return(
        <div className="profile-detail-container primary-background-colour">
            <div className="row">
                <div className="col">
                    <div className="image-container profile-image">
                        <img src="avatar.webp"/>
                    </div>
                </div>
                <div className="col bio-container">
                    Bio
                </div>
            </div>
            <div className="row preferences-container">
                Preferences
            </div>
        </div>
        
    )
}
export default UserDetail