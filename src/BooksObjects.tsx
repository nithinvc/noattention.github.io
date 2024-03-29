import { IBook } from "./Globals";


export const BOOKS: { [key: string]: IBook } = {
    'cat': {
        name: 'The Cat in the Hat',
        author: 'Dr. Seuss',
        readingLevel: 'Easy',
        description: 'A story about a cat that wears a hat. A funny cat it is!',
        publisher: 'Random House', //This is not the full text of the book
        text: `The sun did not shine. 
        It was too wet to play.
        So we sat in the house
        All that cold, cold, wet day.
        
        I sat there with Sally.
        We sat there, we two.
        And I said, "How I wish
        We had something to do!"
        
        Too wet to go out
        And too cold to play ball.
        So we sat in the house.
        We did nothing at all.
        
        So all we could do was to
        
        Sit!
        Sit!
        Sit!
        Sit!
        
        And we did not like it.
        Not one little bit.
        
        BUMP!
        
        And then
        something went BUMP!
        How that bump made us jump!
        
        We looked!
        Then we saw him step in on the mat!
        We looked!
        And we saw him!
        The Cat in the Hat!
        And he said to us,
        "Why do you sit there like that?"
        "I know it is wet
        And the sun is not sunny.
        But we can have
        Lots of good fun that is funny!"
        
        "I know some good games we could play,"
        Said the cat.
        "I know some new tricks,"
        Said the Cat in the Hat.
        "A lot of good tricks.
        I will show them to you.
        Your mother
        Will not mind at all if I do."
        
        Then Sally and I
        Did not know what to say.
        Our mother was out of the house
        For the day.
        `
    }
}
