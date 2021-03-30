export const readTimeAnalyzer = (post) => {
    //console.log(post)
    let READ_SPEED = 200 // words per minute
    /**
     * A post's text can be extracted inside post.node.data.body - it is an array. We
     * can iterate over the array and iterate over the primary text content in the array to
     * get an estimated read time. Just sum up the words and divide by the READ SPEED
     * to get the estimated reading time.
     */
    let NUM_WORDS = 0
    post.node.data.body.forEach(b => {
        if(b.primary != undefined){b.primary.text.raw.forEach(t => {
            if(t != undefined){NUM_WORDS += t.text.split(' ').length}
        })}
    });
    return `${Math.ceil(NUM_WORDS/READ_SPEED)} min read`
}