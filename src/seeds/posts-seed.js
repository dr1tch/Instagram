const posts = [
    // Monica
    {
        postId: "1",
        userId: "4",
        image: "/img/posts/monica-post.png",
        caption: "I'm engaged! I'm engaged! I'm engaged!",
        likes: ["1", "3"],
        comments: [{
                username: "joey",
                body: "She is been there for more than 20 minutes, you didn't hear?",
                created_at: Date.now(),
            },
            {
                username: "ross",
                body: "I thought it was a kid yelling \"I'm gay, I'm gay!\"",
                created_at: Date.now(),
            },
        ],
        created_at: Date.now(),
    },
    // Ross
    {
        postId: "2",
        userId: "3",
        image: "/img/posts/ross-post.jpg",
        caption: "I don't want to get over her! i want to be with her!",
        likes: ["3", "2"],
        comments: [{
                username: "joey",
                body: 'This guy says "Hello." and I wanna kill myself.',
                created_at: Date.now(),
            },
            {
                username: "chandler",
                body: "I'm not great at the advice. Can I interest you in a sarcastic comment?",
                created_at: Date.now(),
            },
        ],
        created_at: Date.now(),
    },
    // Joey
    {
        postId: "3",
        userId: "sOMZlZMtZdQXmUS1uMa054dU7zx1",
        image: "/img/posts/joey-post.jpg",
        caption: "Okay buddy boy, here it is. You hide all my clothes, I'm wearing everything you own.",
        likes: ["2"],
        comments: [{
                username: "chandler",
                body: "Oh my God, That is so not the opposite of taking sombody's underwear!",
                created_at: Date.now(),
            },
            {
                username: "joey",
                body: "Look at me! I'm Chandler. Could I be wearing anymore clothes!",
                created_at: Date.now(),
            },
        ],
        created_at: Date.now(),
    },
    // Chandler
    {
        postId: "4",
        userId: "2",
        image: "/img/posts/chandler-postjpeg",
        caption: "I'm hopeless and awkward and desperate for love!",
        likes: ["3", "1"],
        comments: [{
                username: "joey",
                body: "You married Monica!",
                created_at: Date.now(),
            },
            {
                username: "chandler",
                body: "I'm chandler, I make jokes when I'm uncomfortable.",
                created_at: Date.now(),
            },
        ],
        created_at: Date.now(),
    },
    // Rachel
    {
        postId: "5",
        userId: "5",
        image: "/img/posts/rachel-post.jpg",
        caption: "Ross, You are stealing my wind!",
        likes: ["3", "2"],
        comments: [{
                username: "ross",
                body: "Excuse me, Your wind?",
                created_at: Date.now(),
            },
            {
                username: "rachel",
                body: "Yes, my wind.. How do you expect me to grow if you won't let me blow ?",
                created_at: Date.now(),
            },
            {
                username: "ross",
                body: "You know, I don't have a problem with that!",
                created_at: Date.now(),
            },
        ],
        created_at: Date.now(),
    },
    // Phoebe
    {
        postId: "6",
        userId: "6",
        image: "/img/posts/phoebe-post.png",
        caption: "If we were in prison, you guys would be, like, my bitches",
        likes: ["3", "2"],
        comments: [{
                username: "monica",
                body: "I'm sorry Rachel! :'(",
                created_at: Date.now(),
            },
            {
                username: "rachel",
                body: "I'm sorry Monica! :'(",
                created_at: Date.now(),
            },
            {
                username: "joey",
                body: "How you doin'?",
                created_at: Date.now(),
            },
        ],
        created_at: Date.now(),
    },
];

export default posts;