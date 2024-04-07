function well(x){
    const goodIdeasCount = x.filter(idea => idea === 'good').length;
        return goodIdeasCount === 0 ? 'Fail!' : goodIdeasCount
         <= 2 ? 'Publish!' : 'I smell a series!';
    }
    