import ProfileTranslationHistoryItem from './ProfileTranslationHistoryItem'

const ProfileTranslationHistory = ({ translations }) => {
    
    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + '-' + translation } translation={ translation }/> )
    
    return (
        <>
            <p>Translation history</p>
            <ul>
                { translationList }
            </ul>
        </>
        
    ) 
}
export default ProfileTranslationHistory