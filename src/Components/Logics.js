export const logic= (correctWord,currentWord)=>{
let ans=[0,0,0,0,0];
let mpp=new Map();
for(let i=0;i<5;i++){
    if(mpp.has(correctWord[i])){
        let val=mpp.get(correctWord[i]);
        val++;
        mpp.set(correctWord[i],val);
    }
    else{
        mpp.set(correctWord[i],1);
    }
}
for(let i=0;i<5;i++){
    if(correctWord[i]===currentWord[i]){
        ans[i]=1;
        let val=mpp.get(correctWord[i]);
        val--;
        mpp.set(correctWord[i],val);
    }
}
for(let i=0;i<5;i++){
    if(correctWord[i]!==currentWord[i]){
        if(mpp.has(currentWord[i]) && mpp.get(currentWord[i])>0){
            ans[i]=2;
            let val=mpp.get(currentWord[i]);
        val--;
        mpp.set(currentWord[i],val);
        
        }
        

    }
}
return ans;

}