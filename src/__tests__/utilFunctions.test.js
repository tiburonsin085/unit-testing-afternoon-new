import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test ('this test will chek the length of the text',() => {
    expect(shortenText(shortText)).toHaveLength (32)
})
test('this test will see if we cut after the 100 characters and if the function adds 3 points at the end',() => {
    expect(shortenText(longText)).not.toHaveLength(100)
    expect(shortenText(longText).slice(-3)).toBe('...')
})

test('this will check if the post is equal to 233',() => {
    expect(wordCount(posts)).toBe(233)
})

test ('test if the attachusername return a property of displayname' , () => {
    const testPost = attachUserName(users,posts)
    expect(testPost[0]).toHaveProperty('displayName')
})

test('we will see if it has a number 5 post ', ()=>{
    expect(attachUserName(users, posts)).not.toContainEqual(posts[5])
})