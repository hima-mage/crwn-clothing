const INITAIL_STATE = {
    sections: [{
            title: "hats",
            imageUrl: "https://c4.wallpaperflare.com/wallpaper/251/306/450/adult-back-view-fashion-fedora-wallpaper-preview.jpg",
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: "jackets",
            imageUrl: "https://i.pinimg.com/originals/79/e7/dc/79e7dc50cd0af1a818c7271158be7590.jpg",
            id: 2,
            linkUrl: 'jackets'
        },
        {
            title: "sneakers",
            imageUrl: "https://c0.wallpaperflare.com/preview/943/148/889/nike-air-jordan-1-shoes-near-chain-link-fence.jpg",
            linkUrl: 'sneakers',
            id: 3,
        },
        {
            title: "men",
            imageUrl: "https://c4.wallpaperflare.com/wallpaper/378/481/206/peaky-blinders-cillian-murphy-thomas-shelby-wallpaper-preview.jpg",
            id: 4,
            linkUrl: 'men',
            size: 'large'
        },
        {
            title: "women",
            imageUrl: "https://c1.wallpaperflare.com/preview/237/195/684/attractive-beautiful-beauty-cute.jpg",
            id: 5,
            linkUrl: 'women ',
            size: 'large'
        },
    ],
}

const directoryReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default directoryReducer