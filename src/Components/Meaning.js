export const Meaning= async(word)=>{
    
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        return data[0].meanings[0].definitions[0].definition;
    } catch (error) {
        console.error('Error fetching meaning:', error);
        return null; 
    }
}