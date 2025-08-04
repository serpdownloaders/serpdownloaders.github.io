import { DownloaderConfig } from "./downloader-template";

export const downloaderConfigs: Record<string, DownloaderConfig> = {
  // Video Platforms
  "dailymotion-downloader": {
    name: "Dailymotion",
    title: "Dailymotion Video Downloader",
    description: "Download Dailymotion videos in HD quality. Save your favorite content for offline viewing.",
    iconName: "Play",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-600",
    primaryColor: "bg-orange-500",
    features: [
      "Download videos in HD quality",
      "Support for all Dailymotion content",
      "Extract audio as MP3",
      "Batch download playlists",
      "No registration required",
      "Fast download speeds",
      "Mobile-friendly interface",
      "Subtitle download support"
    ],
    faqs: [
      {
        question: "Can I download private Dailymotion videos?",
        answer: "Only public videos can be downloaded. Private videos require authentication that we don't support."
      },
      {
        question: "What video qualities are available?",
        answer: "We support all available qualities from 144p to 1080p HD, depending on the source video."
      }
    ],
    badge: "Popular Platform",
    inputPlaceholder: "https://www.dailymotion.com/video/...",
    category: "video"
  },
  
  "bilibili-downloader": {
    name: "Bilibili",
    title: "Bilibili Video Downloader",
    description: "Download videos from Bilibili, China's leading video platform. Save anime, gaming, and creative content.",
    iconName: "Tv",
    gradientFrom: "from-blue-500",
    gradientTo: "to-pink-500",
    primaryColor: "bg-blue-500",
    features: [
      "Download Bilibili videos in HD",
      "Support for anime and donghua",
      "Download with danmaku comments",
      "Multi-part video support",
      "Extract audio tracks",
      "Subtitle download",
      "Batch download series",
      "Region-free downloads"
    ],
    faqs: [
      {
        question: "Do I need a Bilibili account?",
        answer: "No account is required for public videos. Some premium content may require login."
      },
      {
        question: "Can I download with subtitles?",
        answer: "Yes, we support downloading videos with Chinese and English subtitles when available."
      }
    ],
    badge: "Anime & Gaming",
    inputPlaceholder: "https://www.bilibili.com/video/...",
    category: "video"
  },

  "vk-downloader": {
    name: "VK",
    title: "VK Video Downloader",
    description: "Download videos from VKontakte (VK), Russia's largest social network. Save videos, music, and more.",
    iconName: "Globe",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-700",
    primaryColor: "bg-blue-600",
    features: [
      "Download VK videos in HD",
      "Save VK music and audio",
      "Download private videos (with access)",
      "Batch download from walls",
      "Support for VK clips",
      "Extract thumbnails",
      "Mobile app support",
      "Fast Russian servers"
    ],
    faqs: [
      {
        question: "Can I download VK music?",
        answer: "Yes, our downloader supports both VK videos and audio files including music tracks."
      },
      {
        question: "Do I need to be logged in to VK?",
        answer: "Public content doesn't require login. Private content requires you to have access."
      }
    ],
    badge: "Social Media",
    inputPlaceholder: "https://vk.com/video...",
    category: "social"
  },

  // Educational Platforms
  "udemy-downloader": {
    name: "Udemy",
    title: "Udemy Course Downloader",
    description: "Download Udemy courses for offline learning. Save your purchased courses and study anywhere.",
    iconName: "GraduationCap",
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600",
    primaryColor: "bg-purple-600",
    features: [
      "Download full courses offline",
      "Save video lectures in HD",
      "Download course materials",
      "Batch download modules",
      "Resume interrupted downloads",
      "Subtitle support",
      "Mobile-friendly format",
      "Organized file structure"
    ],
    faqs: [
      {
        question: "Is it legal to download Udemy courses?",
        answer: "You can only download courses you have purchased. Respect Udemy's terms of service."
      },
      {
        question: "Can I download course resources?",
        answer: "Yes, downloadable resources like PDFs and exercise files can be saved along with videos."
      }
    ],
    badge: "E-Learning",
    inputPlaceholder: "https://www.udemy.com/course/...",
    category: "education"
  },

  "coursera-downloader": {
    name: "Coursera",
    title: "Coursera Course Downloader",
    description: "Download Coursera courses and specializations. Access your learning materials offline.",
    iconName: "BookOpen",
    gradientFrom: "from-blue-700",
    gradientTo: "to-blue-800",
    primaryColor: "bg-blue-700",
    features: [
      "Download video lectures",
      "Save course assignments",
      "Download reading materials",
      "Subtitle in multiple languages",
      "Quiz and test materials",
      "Certificate downloads",
      "Batch download weeks",
      "Mobile-optimized videos"
    ],
    faqs: [
      {
        question: "Can I download Coursera certificates?",
        answer: "Yes, you can download your earned certificates as PDF files."
      },
      {
        question: "Are subtitles included?",
        answer: "Yes, subtitles in multiple languages are available for most courses."
      }
    ],
    badge: "University Courses",
    inputPlaceholder: "https://www.coursera.org/learn/...",
    category: "education"
  },

  "skillshare-downloader": {
    name: "Skillshare",
    title: "Skillshare Class Downloader",
    description: "Download Skillshare classes for offline viewing. Save creative courses and tutorials.",
    iconName: "Sparkles",
    gradientFrom: "from-green-500",
    gradientTo: "to-teal-600",
    primaryColor: "bg-green-500",
    features: [
      "Download full classes",
      "Save project files",
      "HD video quality",
      "Class transcripts",
      "Batch download series",
      "Organized folders",
      "Resume capability",
      "Mobile formats"
    ],
    faqs: [
      {
        question: "Do I need a Skillshare subscription?",
        answer: "Yes, you need an active subscription to download premium classes."
      },
      {
        question: "Can I download class projects?",
        answer: "Yes, downloadable project files and resources are included."
      }
    ],
    badge: "Creative Learning",
    inputPlaceholder: "https://www.skillshare.com/classes/...",
    category: "education"
  },

  // Streaming Platforms
  "hulu-downloader": {
    name: "Hulu",
    title: "Hulu Video Downloader",
    description: "Download Hulu shows and movies. Save your favorite content for offline entertainment.",
    iconName: "Tv",
    gradientFrom: "from-green-600",
    gradientTo: "to-green-700",
    primaryColor: "bg-green-600",
    features: [
      "Download TV shows and movies",
      "HD quality support",
      "Download full seasons",
      "Subtitle support",
      "Resume downloads",
      "Multiple quality options",
      "Organized file naming",
      "Fast US servers"
    ],
    faqs: [
      {
        question: "Do I need a Hulu subscription?",
        answer: "Yes, you must have an active Hulu subscription to download content."
      },
      {
        question: "Can I download Hulu + Live TV?",
        answer: "Live TV cannot be downloaded, only on-demand content is supported."
      }
    ],
    badge: "Streaming Service",
    inputPlaceholder: "https://www.hulu.com/watch/...",
    category: "streaming"
  },

  "tubi-downloader": {
    name: "Tubi",
    title: "Tubi TV Downloader",
    description: "Download free movies and TV shows from Tubi. Save content without ads for offline viewing.",
    iconName: "Film",
    gradientFrom: "from-red-600",
    gradientTo: "to-orange-600",
    primaryColor: "bg-red-600",
    features: [
      "Download free movies and shows",
      "Ad-free offline viewing",
      "HD quality when available",
      "Download full series",
      "Subtitle support",
      "Fast downloads",
      "No account required",
      "Mobile-friendly files"
    ],
    faqs: [
      {
        question: "Is Tubi content really free?",
        answer: "Yes, Tubi offers free content with ads. Downloads are for personal offline use only."
      },
      {
        question: "Are ads included in downloads?",
        answer: "No, downloaded content is ad-free for smooth offline viewing."
      }
    ],
    badge: "Free Streaming",
    inputPlaceholder: "https://tubitv.com/movies/...",
    category: "streaming"
  },

  // Image & Stock Platforms
  "shutterstock-downloader": {
    name: "Shutterstock",
    title: "Shutterstock Image Downloader",
    description: "Download Shutterstock images and vectors. Save stock content for your projects.",
    iconName: "Image",
    gradientFrom: "from-red-700",
    gradientTo: "to-red-800",
    primaryColor: "bg-red-700",
    features: [
      "Download preview images",
      "Save image metadata",
      "Batch download collections",
      "Vector file support",
      "High resolution previews",
      "Similar image finder",
      "Organized downloads",
      "Fast processing"
    ],
    faqs: [
      {
        question: "Can I download full resolution images?",
        answer: "We only provide watermarked previews. Purchase licenses for full resolution."
      },
      {
        question: "Is this legal to use?",
        answer: "Preview downloads are for comp purposes only. Purchase licenses for commercial use."
      }
    ],
    badge: "Stock Photos",
    inputPlaceholder: "https://www.shutterstock.com/image-photo/...",
    category: "images"
  },

  "getty-images-downloader": {
    name: "Getty Images",
    title: "Getty Images Downloader",
    description: "Download Getty Images previews and comp images. Preview professional stock content.",
    iconName: "Camera",
    gradientFrom: "from-black",
    gradientTo: "to-gray-800",
    primaryColor: "bg-black",
    features: [
      "Download comp images",
      "Save image information",
      "Batch download boards",
      "Editorial content support",
      "Metadata preservation",
      "Collection downloads",
      "Search integration",
      "Quick preview saves"
    ],
    faqs: [
      {
        question: "What quality are Getty Images downloads?",
        answer: "Downloads are watermarked comp images for preview purposes only."
      },
      {
        question: "Can I use these commercially?",
        answer: "No, you must purchase a license from Getty Images for any commercial use."
      }
    ],
    badge: "Premium Stock",
    inputPlaceholder: "https://www.gettyimages.com/detail/...",
    category: "images"
  },

  // Document Platforms
  "scribd-downloader": {
    name: "Scribd",
    title: "Scribd Document Downloader",
    description: "Download documents, books, and audiobooks from Scribd. Save reading materials offline.",
    iconName: "FileText",
    gradientFrom: "from-blue-800",
    gradientTo: "to-red-700",
    primaryColor: "bg-blue-800",
    features: [
      "Download PDF documents",
      "Save ebooks and texts",
      "Audiobook downloads",
      "Preserve formatting",
      "Batch download lists",
      "OCR text extraction",
      "Mobile-friendly PDFs",
      "Fast processing"
    ],
    faqs: [
      {
        question: "Do I need a Scribd subscription?",
        answer: "Some documents are free, but most content requires a Scribd subscription."
      },
      {
        question: "Can I download audiobooks?",
        answer: "Yes, audiobooks can be downloaded in MP3 format when available."
      }
    ],
    badge: "Digital Library",
    inputPlaceholder: "https://www.scribd.com/document/...",
    category: "documents"
  },

  // Adult Content (Professional descriptions)
  "onlyfans-downloader": {
    name: "OnlyFans",
    title: "OnlyFans Content Downloader",
    description: "Download content from OnlyFans creators. Save posts, videos, and images from your subscriptions.",
    iconName: "Heart",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    primaryColor: "bg-blue-500",
    features: [
      "Download subscriber content",
      "Save posts and stories",
      "Batch download profiles",
      "High quality media",
      "Organized by creator",
      "Message content support",
      "Live stream saves",
      "Metadata preservation"
    ],
    faqs: [
      {
        question: "Do I need to be subscribed?",
        answer: "Yes, you can only download content from creators you're subscribed to."
      },
      {
        question: "Is this allowed by OnlyFans?",
        answer: "Check OnlyFans terms and creator agreements. Respect content creators' rights."
      }
    ],
    badge: "Subscription Content",
    inputPlaceholder: "https://onlyfans.com/...",
    category: "social"
  },

  // Communication Platforms
  "telegram-downloader": {
    name: "Telegram",
    title: "Telegram Media Downloader",
    description: "Download videos, photos, and files from Telegram channels and groups.",
    iconName: "Send",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    primaryColor: "bg-blue-500",
    features: [
      "Download channel media",
      "Save group content",
      "Batch download files",
      "Voice message support",
      "Document downloads",
      "Sticker pack saves",
      "High quality media",
      "Organized folders"
    ],
    faqs: [
      {
        question: "Can I download from private channels?",
        answer: "You must be a member of private channels to download their content."
      },
      {
        question: "What file types are supported?",
        answer: "All Telegram media types including videos, photos, documents, and voice messages."
      }
    ],
    badge: "Messaging App",
    inputPlaceholder: "https://t.me/...",
    category: "social"
  },

  "snapchat-downloader": {
    name: "Snapchat",
    title: "Snapchat Story Downloader",
    description: "Download Snapchat stories, spotlight videos, and public content.",
    iconName: "MessageCircle",
    gradientFrom: "from-yellow-400",
    gradientTo: "to-yellow-500",
    primaryColor: "bg-yellow-400",
    features: [
      "Download public stories",
      "Save spotlight videos",
      "Snap Map content",
      "High quality saves",
      "No screenshot alerts",
      "Batch story downloads",
      "Creator content",
      "Fast processing"
    ],
    faqs: [
      {
        question: "Will they know I downloaded?",
        answer: "No notifications are sent when downloading public content."
      },
      {
        question: "Can I download private snaps?",
        answer: "No, only public stories and spotlight content can be downloaded."
      }
    ],
    badge: "Stories & Snaps",
    inputPlaceholder: "https://www.snapchat.com/...",
    category: "social"
  },

  // Audio Platforms
  "soundcloud-downloader": {
    name: "SoundCloud",
    title: "SoundCloud Music Downloader",
    description: "Download tracks, playlists, and podcasts from SoundCloud. Save your favorite audio content.",
    iconName: "Headphones",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
    primaryColor: "bg-orange-500",
    features: [
      "Download tracks in high quality",
      "Save full playlists",
      "Download podcasts",
      "Extract metadata",
      "Batch download albums",
      "Support for reposts",
      "Mobile-friendly MP3s",
      "Artist information included"
    ],
    faqs: [
      {
        question: "Can I download private tracks?",
        answer: "Only public tracks and those you have access to can be downloaded."
      },
      {
        question: "What audio quality is available?",
        answer: "We provide the highest quality available from SoundCloud, typically 128kbps MP3."
      }
    ],
    badge: "Music Platform",
    inputPlaceholder: "https://soundcloud.com/...",
    category: "audio"
  },

  "mixcloud-downloader": {
    name: "Mixcloud",
    title: "Mixcloud DJ Mix Downloader",
    description: "Download DJ mixes, radio shows, and podcasts from Mixcloud.",
    iconName: "Radio",
    gradientFrom: "from-blue-600",
    gradientTo: "to-purple-600",
    primaryColor: "bg-blue-600",
    features: [
      "Download full DJ mixes",
      "Save radio shows",
      "Download podcasts",
      "High quality audio",
      "Tracklist information",
      "Show descriptions",
      "Batch downloads",
      "Mobile compatibility"
    ],
    faqs: [
      {
        question: "Can I see the tracklist?",
        answer: "Yes, we include tracklist information when available from the mix."
      },
      {
        question: "Is this legal to download?",
        answer: "Only download content you have permission to use. Respect artists' rights."
      }
    ],
    badge: "DJ Mixes",
    inputPlaceholder: "https://www.mixcloud.com/...",
    category: "audio"
  },

  "bandcamp-downloader": {
    name: "Bandcamp",
    title: "Bandcamp Music Downloader",
    description: "Download music from Bandcamp. Support independent artists while saving their work.",
    iconName: "Music",
    gradientFrom: "from-teal-500",
    gradientTo: "to-blue-600",
    primaryColor: "bg-teal-500",
    features: [
      "Download purchased albums",
      "Save preview tracks",
      "Album artwork included",
      "Lossless quality options",
      "Artist information",
      "Full discography support",
      "Fan funding details",
      "Lyrics when available"
    ],
    faqs: [
      {
        question: "Can I download full albums?",
        answer: "Full downloads require purchase. We support preview tracks for free content."
      },
      {
        question: "What formats are available?",
        answer: "Various formats including MP3, FLAC, and others depending on your purchase."
      }
    ],
    badge: "Independent Music",
    inputPlaceholder: "https://bandcamp.com/...",
    category: "audio"
  },

  "spotify-downloader": {
    name: "Spotify",
    title: "Spotify Playlist Downloader",
    description: "Download Spotify playlist metadata and track information. Note: Audio downloads not supported due to DRM.",
    iconName: "Music",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-600",
    primaryColor: "bg-green-500",
    features: [
      "Export playlist metadata",
      "Track information extraction",
      "Album artwork downloads",
      "Artist details",
      "Playlist descriptions",
      "Track popularity data",
      "Genre information",
      "Release dates"
    ],
    faqs: [
      {
        question: "Can I download actual music files?",
        answer: "No, Spotify uses DRM protection. We only provide metadata and playlist information."
      },
      {
        question: "What information can I get?",
        answer: "Track names, artists, albums, artwork, and other metadata from playlists."
      }
    ],
    badge: "Metadata Only",
    inputPlaceholder: "https://open.spotify.com/playlist/...",
    category: "audio"
  },

  "apple-music-downloader": {
    name: "Apple Music",
    title: "Apple Music Playlist Downloader",
    description: "Download Apple Music playlist metadata and track information. Note: Audio downloads not supported due to DRM.",
    iconName: "Music",
    gradientFrom: "from-gray-800",
    gradientTo: "to-gray-900",
    primaryColor: "bg-gray-800",
    features: [
      "Export playlist metadata",
      "Track information extraction",
      "Album artwork downloads",
      "Artist details",
      "Playlist descriptions",
      "Release information",
      "Genre classifications",
      "Curated playlist data"
    ],
    faqs: [
      {
        question: "Can I download actual music files?",
        answer: "No, Apple Music uses DRM protection. We only provide metadata and playlist information."
      },
      {
        question: "Do I need an Apple Music subscription?",
        answer: "A subscription may be required to access some playlist information."
      }
    ],
    badge: "Metadata Only",
    inputPlaceholder: "https://music.apple.com/...",
    category: "audio"
  },

  // Streaming Services
  "netflix-downloader": {
    name: "Netflix",
    title: "Netflix Content Downloader",
    description: "Download Netflix shows and movies for offline viewing with your subscription.",
    iconName: "Film",
    gradientFrom: "from-red-600",
    gradientTo: "to-red-700",
    primaryColor: "bg-red-600",
    features: [
      "Download movies and series",
      "Multiple quality options",
      "Subtitle downloads",
      "Episode batch downloads",
      "Resume interrupted downloads",
      "Offline viewing support",
      "Mobile device compatibility",
      "Organized file structure"
    ],
    faqs: [
      {
        question: "Do I need a Netflix subscription?",
        answer: "Yes, you must have an active Netflix subscription to download content."
      },
      {
        question: "Which content can I download?",
        answer: "Only content that Netflix allows for offline viewing can be downloaded."
      }
    ],
    badge: "Premium Streaming",
    inputPlaceholder: "https://www.netflix.com/watch/...",
    category: "streaming"
  },

  "amazon-video-downloader": {
    name: "Amazon Prime Video",
    title: "Amazon Prime Video Downloader",
    description: "Download Amazon Prime Video content for offline entertainment.",
    iconName: "Tv",
    gradientFrom: "from-blue-800",
    gradientTo: "to-blue-900",
    primaryColor: "bg-blue-800",
    features: [
      "Download Prime Video content",
      "HD quality support",
      "Subtitle and audio tracks",
      "Season batch downloads",
      "Resume capability",
      "Multiple languages",
      "Offline viewing",
      "IMDb integration"
    ],
    faqs: [
      {
        question: "Do I need Amazon Prime?",
        answer: "Yes, you need an active Amazon Prime subscription for most content."
      },
      {
        question: "Can I download rented movies?",
        answer: "Yes, rented and purchased content can typically be downloaded."
      }
    ],
    badge: "Prime Video",
    inputPlaceholder: "https://www.amazon.com/gp/video/...",
    category: "streaming"
  },

  "disney-plus-downloader": {
    name: "Disney+",
    title: "Disney Plus Content Downloader",
    description: "Download Disney+ movies, shows, and exclusive content for offline viewing.",
    iconName: "Film",
    gradientFrom: "from-blue-600",
    gradientTo: "to-purple-700",
    primaryColor: "bg-blue-600",
    features: [
      "Download Disney content",
      "Marvel and Star Wars",
      "Pixar animations",
      "National Geographic",
      "4K quality support",
      "Multiple audio tracks",
      "Subtitle downloads",
      "Family-friendly organization"
    ],
    faqs: [
      {
        question: "What Disney content is available?",
        answer: "All Disney+, Marvel, Star Wars, Pixar, and National Geographic content."
      },
      {
        question: "Can I download in 4K?",
        answer: "4K downloads are available for supported content and devices."
      }
    ],
    badge: "Family Entertainment",
    inputPlaceholder: "https://www.disneyplus.com/...",
    category: "streaming"
  },

  "hbo-max-downloader": {
    name: "HBO Max",
    title: "HBO Max Content Downloader", 
    description: "Download HBO Max original series, movies, and premium content.",
    iconName: "Monitor",
    gradientFrom: "from-purple-700",
    gradientTo: "to-purple-800",
    primaryColor: "bg-purple-700",
    features: [
      "Download HBO originals",
      "Max exclusive content",
      "Premium movie selection",
      "Documentary series",
      "HD quality downloads",
      "Multiple seasons",
      "Subtitle support",
      "Curated collections"
    ],
    faqs: [
      {
        question: "Is HBO Max subscription required?",
        answer: "Yes, you need an active HBO Max subscription to download content."
      },
      {
        question: "Can I download HBO originals?",
        answer: "Yes, HBO original series and movies are available for download."
      }
    ],
    badge: "Premium Content",
    inputPlaceholder: "https://play.hbomax.com/...",
    category: "streaming"
  },

  "paramount-plus-downloader": {
    name: "Paramount+",
    title: "Paramount Plus Downloader",
    description: "Download Paramount+ shows, movies, and live sports content.",
    iconName: "Tv",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-700",
    primaryColor: "bg-blue-500",
    features: [
      "Download TV shows and movies",
      "CBS and Paramount content",
      "Live sports replays",
      "News program archives",
      "Multiple quality options",
      "Closed captions",
      "Series batch downloads",
      "Mobile compatibility"
    ],
    faqs: [
      {
        question: "Can I download live sports?",
        answer: "Live sports replays and highlights can be downloaded after broadcast."
      },
      {
        question: "Is CBS content included?",
        answer: "Yes, CBS shows and Paramount+ originals are both supported."
      }
    ],
    badge: "Sports & Entertainment",
    inputPlaceholder: "https://www.paramountplus.com/...",
    category: "streaming"
  },

  "peacock-downloader": {
    name: "Peacock",
    title: "Peacock TV Downloader",
    description: "Download Peacock TV shows, movies, and NBC content for offline viewing.",
    iconName: "Film",
    gradientFrom: "from-blue-400",
    gradientTo: "to-purple-600",
    primaryColor: "bg-blue-400",
    features: [
      "Download NBC shows",
      "Peacock originals",
      "Movie collection",
      "Classic TV series",
      "News and sports highlights",
      "Comedy specials",
      "Kids content",
      "Premium and free tiers"
    ],
    faqs: [
      {
        question: "Is Peacock free content included?",
        answer: "Yes, both free and premium Peacock content can be downloaded."
      },
      {
        question: "Can I download NBC shows?",
        answer: "Yes, current and classic NBC programming is available."
      }
    ],
    badge: "NBC Content",
    inputPlaceholder: "https://www.peacocktv.com/...",
    category: "streaming"
  },

  "crunchyroll-downloader": {
    name: "Crunchyroll",
    title: "Crunchyroll Anime Downloader",
    description: "Download anime episodes and series from Crunchyroll for offline viewing.",
    iconName: "Tv",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-600",
    primaryColor: "bg-orange-500",
    features: [
      "Download anime episodes",
      "Subtitle downloads",
      "Multiple languages",
      "Season batch downloads",
      "HD quality anime",
      "Simulcast series",
      "Manga integration",
      "Mobile-friendly files"
    ],
    faqs: [
      {
        question: "Can I download with subtitles?",
        answer: "Yes, subtitles in multiple languages are included when available."
      },
      {
        question: "Do I need Crunchyroll Premium?",
        answer: "Premium subscription removes ads and enables higher quality downloads."
      }
    ],
    badge: "Anime Streaming",
    inputPlaceholder: "https://www.crunchyroll.com/...",
    category: "streaming"
  },

  "funimation-downloader": {
    name: "Funimation",
    title: "Funimation Anime Downloader",
    description: "Download dubbed and subbed anime from Funimation's extensive library.",
    iconName: "Play",
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600",
    primaryColor: "bg-purple-600",
    features: [
      "Download dubbed anime",
      "Subbed anime support",
      "English voice acting",
      "Multiple audio tracks",
      "Episode batch downloads",
      "Premium quality",
      "Mobile compatibility",
      "Series collections"
    ],
    faqs: [
      {
        question: "Can I get both dub and sub?",
        answer: "Yes, when available, both dubbed and subtitled versions can be downloaded."
      },
      {
        question: "Is Funimation subscription needed?",
        answer: "Yes, a Funimation subscription is required for most content."
      }
    ],
    badge: "Dubbed Anime",
    inputPlaceholder: "https://www.funimation.com/...",
    category: "streaming"
  },

  // Social Media
  "reddit-downloader": {
    name: "Reddit",
    title: "Reddit Media Downloader",
    description: "Download images, videos, and GIFs from Reddit posts and comments.",
    iconName: "MessageCircle",
    gradientFrom: "from-orange-600",
    gradientTo: "to-red-600",
    primaryColor: "bg-orange-600",
    features: [
      "Download post media",
      "Save comment images",
      "GIF and video support",
      "Gallery downloads",
      "Subreddit batch saves",
      "High quality media",
      "Post metadata",
      "Comment preservation"
    ],
    faqs: [
      {
        question: "Can I download entire subreddits?",
        answer: "Yes, you can batch download media from subreddit posts."
      },
      {
        question: "Are NSFW posts supported?",
        answer: "NSFW content can be downloaded but requires appropriate verification."
      }
    ],
    badge: "Social Platform",
    inputPlaceholder: "https://www.reddit.com/r/...",
    category: "social"
  },

  "imgur-downloader": {
    name: "Imgur",
    title: "Imgur Image Downloader",
    description: "Download images, albums, and GIFs from Imgur galleries.",
    iconName: "Image",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-600",
    primaryColor: "bg-green-500",
    features: [
      "Download single images",
      "Save full albums",
      "GIF downloads",
      "Gallery batch saves",
      "High resolution images",
      "Album organization",
      "Metadata preservation",
      "Fast bulk downloads"
    ],
    faqs: [
      {
        question: "Can I download private albums?",
        answer: "Only public albums and images can be downloaded."
      },
      {
        question: "What's the maximum resolution?",
        answer: "We download the highest resolution available from Imgur."
      }
    ],
    badge: "Image Hosting",
    inputPlaceholder: "https://imgur.com/...",
    category: "images"
  },

  "9gag-downloader": {
    name: "9GAG",
    title: "9GAG Meme Downloader",
    description: "Download memes, videos, and GIFs from 9GAG posts.",
    iconName: "Image",
    gradientFrom: "from-red-500",
    gradientTo: "to-pink-500",
    primaryColor: "bg-red-500",
    features: [
      "Download memes and images",
      "Save funny videos",
      "GIF collections",
      "Hot posts batch saves",
      "Trending content",
      "Category-based downloads",
      "High quality media",
      "Mobile-friendly saves"
    ],
    faqs: [
      {
        question: "Can I download from different sections?",
        answer: "Yes, content from Hot, Trending, and various categories can be downloaded."
      },
      {
        question: "Are videos included?",
        answer: "Yes, both images and video memes are supported."
      }
    ],
    badge: "Meme Platform",
    inputPlaceholder: "https://9gag.com/gag/...",
    category: "social"
  },

  "ifunny-downloader": {
    name: "iFunny",
    title: "iFunny Meme Downloader",  
    description: "Download memes, videos, and GIFs from iFunny posts.",
    iconName: "Image",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-orange-500",
    primaryColor: "bg-yellow-500",
    features: [
      "Download meme images",
      "Save funny videos",
      "GIF downloads",
      "Featured content",
      "User profile media",
      "Batch downloads",
      "Watermark-free saves",
      "Mobile optimization"
    ],
    faqs: [
      {
        question: "Are watermarks removed?",
        answer: "We download the original media without additional watermarks when possible."
      },
      {
        question: "Can I save from user profiles?",
        answer: "Yes, public posts from user profiles can be downloaded."
      }
    ],
    badge: "Comedy Platform",
    inputPlaceholder: "https://ifunny.co/...",
    category: "social"
  },

  "tumblr-downloader": {
    name: "Tumblr",
    title: "Tumblr Media Downloader",
    description: "Download images, videos, and GIFs from Tumblr blogs and posts.",
    iconName: "Image",
    gradientFrom: "from-blue-600",
    gradientTo: "to-purple-600",
    primaryColor: "bg-blue-600",
    features: [
      "Download blog media",
      "Save post images",
      "Video downloads",
      "GIF collections",
      "Tag-based searches",
      "Blog archiving",
      "High resolution saves",
      "Batch processing"
    ],
    faqs: [
      {
        question: "Can I download entire blogs?",
        answer: "Yes, you can batch download all media from public Tumblr blogs."
      },
      {
        question: "Are private blogs supported?",
        answer: "Only public blogs and posts can be downloaded."
      }
    ],
    badge: "Microblogging",
    inputPlaceholder: "https://tumblr.com/...",
    category: "social"
  },

  "flickr-downloader": {
    name: "Flickr",
    title: "Flickr Photo Downloader",
    description: "Download high-quality photos and albums from Flickr photographers.",
    iconName: "Camera",
    gradientFrom: "from-pink-500",
    gradientTo: "to-blue-500",
    primaryColor: "bg-pink-500",
    features: [
      "Download high-res photos",
      "Save photo albums",
      "Photographer galleries",
      "EXIF data preservation",
      "Creative Commons images",
      "Group pool downloads",
      "Metadata included",
      "Batch album saves"
    ],
    faqs: [
      {
        question: "Can I download any resolution?",
        answer: "Resolution depends on photographer's settings and licensing permissions."
      },
      {
        question: "Are Creative Commons photos included?",
        answer: "Yes, CC-licensed photos can be downloaded with attribution info."
      }
    ],
    badge: "Photography",
    inputPlaceholder: "https://www.flickr.com/photos/...",
    category: "images"
  },

  "deviantart-downloader": {
    name: "DeviantArt",
    title: "DeviantArt Artwork Downloader",
    description: "Download digital art, illustrations, and photography from DeviantArt.",
    iconName: "Palette",
    gradientFrom: "from-green-600",
    gradientTo: "to-blue-600",
    primaryColor: "bg-green-600",
    features: [
      "Download digital artwork",
      "Save illustrations",
      "Photography collections",
      "Artist gallery saves",
      "High resolution art",
      "Metadata preservation",
      "Category browsing",
      "Batch downloads"
    ],
    faqs: [
      {
        question: "Can I download premium content?",
        answer: "Only publicly available artworks can be downloaded."
      },
      {
        question: "Is artist attribution preserved?",
        answer: "Yes, artist information and artwork details are included."
      }
    ],
    badge: "Digital Art",
    inputPlaceholder: "https://www.deviantart.com/...",
    category: "images"
  },

  "behance-downloader": {
    name: "Behance",
    title: "Behance Portfolio Downloader",
    description: "Download creative projects and portfolios from Adobe Behance.",
    iconName: "PenTool",
    gradientFrom: "from-blue-700",
    gradientTo: "to-purple-700",
    primaryColor: "bg-blue-700",
    features: [
      "Download creative projects",
      "Save portfolio pieces",
      "Design collections",
      "High quality images",
      "Project descriptions",
      "Artist information",
      "Category filtering",
      "Batch project saves"
    ],
    faqs: [
      {
        question: "Can I download entire portfolios?",
        answer: "Yes, you can save all public projects from creative professionals."
      },
      {
        question: "Are project details included?",
        answer: "Yes, project descriptions and artist information are preserved."
      }
    ],
    badge: "Creative Portfolio",
    inputPlaceholder: "https://www.behance.net/gallery/...",
    category: "images"
  },

  "dribbble-downloader": {
    name: "Dribbble",
    title: "Dribbble Design Downloader",
    description: "Download design shots and creative work from Dribbble designers.",
    iconName: "PenTool",
    gradientFrom: "from-pink-500",
    gradientTo: "to-pink-600",
    primaryColor: "bg-pink-500",
    features: [
      "Download design shots",
      "Save UI/UX designs",
      "Designer portfolios",
      "High quality images",
      "Shot descriptions",
      "Designer profiles",
      "Popular shots",
      "Category collections"
    ],
    faqs: [
      {
        question: "Can I download attachments?",
        answer: "Publicly available attachments and images can be downloaded."
      },
      {
        question: "Are Pro shots included?",
        answer: "Only publicly viewable shots can be downloaded."
      }
    ],
    badge: "Design Community",
    inputPlaceholder: "https://dribbble.com/shots/...",
    category: "images"
  },

  // Stock Photo Platforms
  "unsplash-downloader": {
    name: "Unsplash",
    title: "Unsplash Photo Downloader",
    description: "Download free high-resolution photos from Unsplash photographers.",
    iconName: "Camera",
    gradientFrom: "from-black",
    gradientTo: "to-gray-700",
    primaryColor: "bg-black",
    features: [
      "Download free high-res photos",
      "Photographer attribution",
      "Collection downloads",
      "Search by category",
      "EXIF data included",
      "Multiple resolutions",
      "Batch downloads",
      "Commercial use allowed"
    ],
    faqs: [
      {
        question: "Are these photos really free?",
        answer: "Yes, all Unsplash photos are free for commercial and personal use."
      },
      {
        question: "Do I need to credit photographers?",
        answer: "Attribution is appreciated but not required for Unsplash photos."
      }
    ],
    badge: "Free Stock Photos",
    inputPlaceholder: "https://unsplash.com/photos/...",
    category: "images"
  },

  "pexels-downloader": {
    name: "Pexels",
    title: "Pexels Stock Photo Downloader",
    description: "Download free stock photos and videos from Pexels creators.",
    iconName: "Camera",
    gradientFrom: "from-teal-600",
    gradientTo: "to-green-600",
    primaryColor: "bg-teal-600",
    features: [
      "Download free stock photos",
      "Save stock videos",
      "Photographer credits",
      "Multiple sizes available",
      "Collection browsing",
      "Category filtering",
      "Batch downloads",
      "Commercial licensing"
    ],
    faqs: [
      {
        question: "Can I use these commercially?",
        answer: "Yes, all Pexels content is free for commercial and personal use."
      },
      {
        question: "Are videos included?",
        answer: "Yes, both photos and videos can be downloaded from Pexels."
      }
    ],
    badge: "Free Stock Media",
    inputPlaceholder: "https://www.pexels.com/photo/...",
    category: "images"
  },

  "pixabay-downloader": {
    name: "Pixabay",
    title: "Pixabay Media Downloader",
    description: "Download free images, vectors, and videos from Pixabay's library.",
    iconName: "Image",
    gradientFrom: "from-green-500",
    gradientTo: "to-blue-500",
    primaryColor: "bg-green-500",
    features: [
      "Download free images",
      "Vector graphics",
      "Video downloads",
      "Illustrations",
      "Multiple resolutions",
      "Commercial use rights",
      "No attribution required",
      "Batch processing"
    ],
    faqs: [
      {
        question: "What types of media are available?",
        answer: "Photos, vectors, illustrations, and videos are all available."
      },
      {
        question: "Do I need to pay for high resolution?",
        answer: "No, all resolutions are free, though registration may be required."
      }
    ],
    badge: "Free Media Library",
    inputPlaceholder: "https://pixabay.com/...",
    category: "images"
  },

  "freepik-downloader": {
    name: "Freepik",
    title: "Freepik Resource Downloader",
    description: "Download free vectors, photos, and graphics from Freepik's design resources.",
    iconName: "PenTool",
    gradientFrom: "from-blue-500",
    gradientTo: "to-teal-500",
    primaryColor: "bg-blue-500",
    features: [
      "Download vector graphics",
      "Free photos and images",
      "Design templates",
      "Icon collections",
      "PSD files",
      "AI and EPS formats",
      "Premium previews",
      "Attribution included"
    ],
    faqs: [
      {
        question: "Do I need attribution for free resources?",
        answer: "Yes, attribution is required for free Freepik resources."
      },
      {
        question: "Can I download premium content?",
        answer: "Premium content requires a Freepik subscription to download."
      }
    ],
    badge: "Design Resources",
    inputPlaceholder: "https://www.freepik.com/...",
    category: "images"
  },

  // Professional Platforms
  "linkedin-downloader": {
    name: "LinkedIn",
    title: "LinkedIn Content Downloader",
    description: "Download LinkedIn posts, articles, and professional content.",
    iconName: "Briefcase",
    gradientFrom: "from-blue-700",
    gradientTo: "to-blue-800",
    primaryColor: "bg-blue-700",
    features: [
      "Download post content",
      "Save articles",
      "Profile information",
      "Company updates",
      "Video posts",
      "Document downloads",
      "Connection data",
      "Professional insights"
    ],
    faqs: [
      {
        question: "Can I download private profiles?",
        answer: "Only publicly visible content can be downloaded."
      },
      {
        question: "Are LinkedIn articles included?",
        answer: "Yes, published articles and long-form posts can be saved."
      }
    ],
    badge: "Professional Network",
    inputPlaceholder: "https://www.linkedin.com/...",
    category: "social"
  },

  "linkedin-learning-downloader": {
    name: "LinkedIn Learning",
    title: "LinkedIn Learning Course Downloader",
    description: "Download LinkedIn Learning courses and professional development content.",
    iconName: "GraduationCap",
    gradientFrom: "from-blue-800",
    gradientTo: "to-blue-900",
    primaryColor: "bg-blue-800",
    features: [
      "Download course videos",
      "Save exercise files",
      "Course transcripts",
      "Certificate downloads",
      "Learning paths",
      "Skill assessments",
      "Mobile-friendly format",
      "Progress tracking"
    ],
    faqs: [
      {
        question: "Do I need LinkedIn Learning subscription?",
        answer: "Yes, an active subscription is required to download course content."
      },
      {
        question: "Can I download certificates?",
        answer: "Yes, completion certificates can be downloaded as PDFs."
      }
    ],
    badge: "Professional Learning",
    inputPlaceholder: "https://www.linkedin.com/learning/...",
    category: "education"
  },

  "pluralsight-downloader": {
    name: "Pluralsight",
    title: "Pluralsight Course Downloader",
    description: "Download Pluralsight technology courses and learning paths.",
    iconName: "Code",
    gradientFrom: "from-pink-600",
    gradientTo: "to-red-600",
    primaryColor: "bg-pink-600",
    features: [
      "Download tech courses",
      "Save learning paths",
      "Exercise files",
      "Course assessments",
      "Skill measurements",
      "Video transcripts",
      "Mobile offline viewing",
      "Progress synchronization"
    ],
    faqs: [
      {
        question: "Can I download hands-on labs?",
        answer: "Video content can be downloaded, but interactive labs require online access."
      },
      {
        question: "Are all skill levels included?",
        answer: "Yes, beginner to advanced courses across all technology topics."
      }
    ],
    badge: "Technology Training",
    inputPlaceholder: "https://www.pluralsight.com/courses/...",
    category: "education"
  },

  "khan-academy-downloader": {
    name: "Khan Academy",
    title: "Khan Academy Course Downloader",
    description: "Download Khan Academy lessons and educational content for offline learning.",
    iconName: "GraduationCap",
    gradientFrom: "from-green-600",
    gradientTo: "to-blue-600",
    primaryColor: "bg-green-600",
    features: [
      "Download video lessons",
      "Save practice exercises",
      "Math and science content", 
      "Art and history courses",
      "Subtitles included",
      "Progress tracking",
      "Free educational content",
      "Mobile compatibility"
    ],
    faqs: [
      {
        question: "Is Khan Academy content free?",
        answer: "Yes, all Khan Academy content is completely free to access and download."
      },
      {
        question: "Can I download practice problems?",
        answer: "Video lessons can be downloaded, but interactive exercises require online access."
      }
    ],
    badge: "Free Education",
    inputPlaceholder: "https://www.khanacademy.org/...",
    category: "education"
  },

  "ted-downloader": {
    name: "TED",
    title: "TED Talk Downloader",
    description: "Download TED Talks and educational presentations from global speakers.",
    iconName: "Play",
    gradientFrom: "from-red-600",
    gradientTo: "to-red-700",
    primaryColor: "bg-red-600",
    features: [
      "Download TED Talks",
      "Multiple video qualities",
      "Subtitle downloads",
      "Speaker information",
      "Talk transcripts",
      "Related talks",
      "Mobile-friendly videos",
      "Batch downloads"
    ],
    faqs: [
      {
        question: "Are subtitles available?",
        answer: "Yes, subtitles in multiple languages are available for most TED Talks."
      },
      {
        question: "Can I download TEDx talks?",
        answer: "Yes, both official TED and TEDx talks can be downloaded."
      }
    ],
    badge: "Ideas Worth Spreading",
    inputPlaceholder: "https://www.ted.com/talks/...",
    category: "education"
  },

  "masterclass-downloader": {
    name: "MasterClass",
    title: "MasterClass Course Downloader",
    description: "Download MasterClass lessons from world-renowned experts and celebrities.",
    iconName: "Award",
    gradientFrom: "from-black",
    gradientTo: "to-red-800",
    primaryColor: "bg-black",
    features: [
      "Download celebrity classes",
      "Expert instruction videos",
      "Course workbooks",
      "Class notes",
      "High production quality",
      "Celebrity instructors",
      "Mobile downloads",
      "Offline viewing"
    ],
    faqs: [
      {
        question: "Do I need a MasterClass subscription?",
        answer: "Yes, an active MasterClass subscription is required to download content."
      },
      {
        question: "Can I download workbooks?",
        answer: "Yes, course materials and workbooks are included with video lessons."
      }
    ],
    badge: "Celebrity Instruction",
    inputPlaceholder: "https://www.masterclass.com/classes/...",
    category: "education"
  },

  "domestika-downloader": {
    name: "Domestika",
    title: "Domestika Creative Course Downloader",
    description: "Download creative courses from Domestika's community of designers and artists.",
    iconName: "Palette",
    gradientFrom: "from-pink-500",
    gradientTo: "to-orange-500",
    primaryColor: "bg-pink-500",
    features: [
      "Download creative courses",
      "Design tutorials",
      "Art instruction",
      "Project files",
      "Multiple languages",
      "Creative community",
      "Portfolio projects",
      "Mobile learning"
    ],
    faqs: [
      {
        question: "Are courses available in English?",
        answer: "Yes, courses are available in multiple languages including English."
      },
      {
        question: "Can I download project resources?",
        answer: "Yes, project files and resources are included with course purchases."
      }
    ],
    badge: "Creative Learning",
    inputPlaceholder: "https://www.domestika.org/en/courses/...",
    category: "education"
  },

  "creativelive-downloader": {
    name: "CreativeLive",
    title: "CreativeLive Course Downloader", 
    description: "Download CreativeLive creative and business courses from industry experts.",
    iconName: "Sparkles",
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600",
    primaryColor: "bg-purple-600",
    features: [
      "Download creative courses",
      "Business training",
      "Photography classes",
      "Design tutorials",
      "Course materials",
      "Expert instructors",
      "Live class archives",
      "Mobile compatibility"
    ],
    faqs: [
      {
        question: "Can I download live classes?",
        answer: "Live class recordings can be downloaded after they're archived."
      },
      {
        question: "Are course materials included?",
        answer: "Yes, downloadable resources and materials are provided with courses."
      }
    ],
    badge: "Creative & Business",
    inputPlaceholder: "https://www.creativelive.com/class/...",
    category: "education"
  },

  "lynda-downloader": {
    name: "Lynda",
    title: "Lynda Course Downloader",
    description: "Download Lynda (LinkedIn Learning legacy) courses and tutorials.",
    iconName: "BookOpen",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-700",
    primaryColor: "bg-blue-600",
    features: [
      "Download legacy courses",
      "Technical tutorials",
      "Creative training",
      "Business courses",
      "Exercise files",
      "Course transcripts",
      "Certificates",
      "Mobile viewing"
    ],
    faqs: [
      {
        question: "Is Lynda still available?",
        answer: "Lynda has migrated to LinkedIn Learning, but legacy content may still be accessible."
      },
      {
        question: "Can I download exercise files?",
        answer: "Yes, exercise files and course materials are included when available."
      }
    ],
    badge: "Legacy Learning",
    inputPlaceholder: "https://www.lynda.com/...",
    category: "education"
  },

  "treehouse-downloader": {
    name: "Treehouse",
    title: "Treehouse Course Downloader",
    description: "Download Treehouse programming and web development courses.",
    iconName: "Code",
    gradientFrom: "from-green-600",
    gradientTo: "to-green-700",
    primaryColor: "bg-green-600",
    features: [
      "Download coding courses",
      "Web development tracks",
      "Programming tutorials",
      "Project files",
      "Code challenges",
      "Learning tracks",
      "Mobile development",
      "Full-stack training"
    ],
    faqs: [
      {
        question: "Are coding challenges included?",
        answer: "Video content can be downloaded, but interactive challenges require online access."
      },
      {
        question: "Can I download learning tracks?",
        answer: "Yes, complete learning tracks with all associated courses can be saved."
      }
    ],
    badge: "Tech Education",
    inputPlaceholder: "https://teamtreehouse.com/library/...",
    category: "education"
  },

  "datacamp-downloader": {
    name: "DataCamp",
    title: "DataCamp Course Downloader",
    description: "Download DataCamp data science and analytics courses.",
    iconName: "Database",
    gradientFrom: "from-green-500",
    gradientTo: "to-teal-600",
    primaryColor: "bg-green-500",
    features: [
      "Download data science courses",
      "Python and R training",
      "SQL tutorials",
      "Machine learning content",
      "Exercise datasets",
      "Career tracks",
      "Skill assessments",
      "Mobile learning"
    ],
    faqs: [
      {
        question: "Can I download datasets?",
        answer: "Course videos and materials can be downloaded, but interactive exercises require online access."
      },
      {
        question: "Are all programming languages covered?",
        answer: "Yes, Python, R, SQL, and other data science languages are included."
      }
    ],
    badge: "Data Science",
    inputPlaceholder: "https://www.datacamp.com/courses/...",
    category: "education"
  },

  "codeacademy-downloader": {
    name: "Codecademy",
    title: "Codecademy Course Downloader",
    description: "Download Codecademy programming courses and coding tutorials.",
    iconName: "Code",
    gradientFrom: "from-purple-600",
    gradientTo: "to-blue-600",
    primaryColor: "bg-purple-600",
    features: [
      "Download coding courses",
      "Programming tutorials",
      "Web development paths",
      "Mobile app development",
      "Course projects",
      "Certificates",
      "Pro content",
      "Career paths"
    ],
    faqs: [
      {
        question: "Can I download interactive lessons?",
        answer: "Video content can be downloaded, but interactive coding exercises require online access."
      },
      {
        question: "Is Pro content included?",
        answer: "Pro content requires a Codecademy Pro subscription to download."
      }
    ],
    badge: "Learn to Code",
    inputPlaceholder: "https://www.codecademy.com/learn/...",
    category: "education"
  },

  // Development Platforms
  "github-downloader": {
    name: "GitHub",
    title: "GitHub Repository Downloader",
    description: "Download GitHub repositories, releases, and project files.",
    iconName: "Code",
    gradientFrom: "from-gray-800",
    gradientTo: "to-black",
    primaryColor: "bg-gray-800",
    features: [
      "Download repositories",
      "Clone projects",
      "Release downloads",
      "Issue tracking data",
      "Wiki content",
      "Gist collections",
      "Branch archives",
      "Repository metadata"
    ],
    faqs: [
      {
        question: "Can I download private repositories?",
        answer: "Only public repositories can be downloaded unless you have access permissions."
      },
      {
        question: "Are all file types supported?",
        answer: "Yes, all file types and project structures are preserved in downloads."
      }
    ],
    badge: "Code Hosting",
    inputPlaceholder: "https://github.com/user/repo",
    category: "development"
  },

  "gitlab-downloader": {
    name: "GitLab",
    title: "GitLab Project Downloader",
    description: "Download GitLab projects, repositories, and CI/CD artifacts.",
    iconName: "Code",
    gradientFrom: "from-orange-600",
    gradientTo: "to-red-600",
    primaryColor: "bg-orange-600",
    features: [
      "Download GitLab projects",
      "Repository archives",
      "CI/CD artifacts",
      "Issue exports",
      "Wiki downloads",
      "Snippet collections",
      "Release assets",
      "Project metadata"
    ],
    faqs: [
      {
        question: "Can I download CI/CD artifacts?",
        answer: "Yes, build artifacts and pipeline outputs can be downloaded."
      },
      {
        question: "Are private projects supported?",
        answer: "Private projects require appropriate access permissions to download."
      }
    ],
    badge: "DevOps Platform",
    inputPlaceholder: "https://gitlab.com/user/project",
    category: "development"
  },

  "bitbucket-downloader": {
    name: "Bitbucket",
    title: "Bitbucket Repository Downloader",
    description: "Download Bitbucket repositories and project assets.",
    iconName: "Code",
    gradientFrom: "from-blue-700",
    gradientTo: "to-blue-800",
    primaryColor: "bg-blue-700",
    features: [
      "Download repositories",
      "Source code archives",
      "Issue tracking data",
      "Wiki content",
      "Pull request data",
      "Pipeline artifacts",
      "Release downloads",
      "Project documentation"
    ],
    faqs: [
      {
        question: "Can I download Atlassian-hosted repos?",
        answer: "Yes, both Bitbucket Cloud and Server repositories are supported."
      },
      {
        question: "Are pipeline artifacts included?",
        answer: "Yes, build artifacts from Bitbucket Pipelines can be downloaded."
      }
    ],
    badge: "Git Hosting",
    inputPlaceholder: "https://bitbucket.org/user/repo",
    category: "development"
  },

  "stackoverflow-downloader": {
    name: "Stack Overflow",
    title: "Stack Overflow Question Downloader",
    description: "Download Stack Overflow questions, answers, and code snippets.",
    iconName: "HelpCircle",
    gradientFrom: "from-orange-500",
    gradientTo: "to-yellow-600",
    primaryColor: "bg-orange-500",
    features: [
      "Download Q&A content",
      "Code snippet extraction",
      "User profile data",
      "Tag-based searches",
      "Answer voting data",
      "Comment threads",
      "Related questions",
      "Markdown formatting"
    ],
    faqs: [
      {
        question: "Can I download code snippets?",
        answer: "Yes, code blocks and snippets are preserved with syntax highlighting."
      },
      {
        question: "Is user reputation included?",
        answer: "Yes, user profiles and reputation data are included when available."
      }
    ],
    badge: "Developer Q&A",
    inputPlaceholder: "https://stackoverflow.com/questions/...",
    category: "development"
  },

  "medium-downloader": {
    name: "Medium",
    title: "Medium Article Downloader",
    description: "Download Medium articles, stories, and publications for offline reading.",
    iconName: "FileText",
    gradientFrom: "from-black",
    gradientTo: "to-gray-700",
    primaryColor: "bg-black",
    features: [
      "Download articles",
      "Save publications",
      "Author profiles",
      "Reading lists",
      "Story highlights",
      "Comment sections",
      "Image preservation",
      "Clean formatting"
    ],
    faqs: [
      {
        question: "Can I download paywalled articles?",
        answer: "Only publicly accessible articles can be downloaded."
      },
      {
        question: "Are images included?",
        answer: "Yes, all images and media from articles are preserved."
      }
    ],
    badge: "Publishing Platform",
    inputPlaceholder: "https://medium.com/@user/article",
    category: "documents"
  },

  "substack-downloader": {
    name: "Substack",
    title: "Substack Newsletter Downloader",
    description: "Download Substack newsletters, posts, and subscriber content.",
    iconName: "FileText",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
    primaryColor: "bg-orange-500",
    features: [
      "Download newsletter posts",
      "Save subscriber content",
      "Archive publications",
      "Author information",
      "Comment threads",
      "Email formatting",
      "Media preservation",
      "Subscription feeds"
    ],
    faqs: [
      {
        question: "Can I download paid newsletters?",
        answer: "Only content you have access to through subscription can be downloaded."
      },
      {
        question: "Are comments included?",
        answer: "Yes, comment threads and discussions are preserved when available."
      }
    ],
    badge: "Newsletter Platform",
    inputPlaceholder: "https://newsletter.substack.com/p/...",
    category: "documents"
  },

  // Monetization Platforms
  "patreon-downloader": {
    name: "Patreon",
    title: "Patreon Creator Content Downloader",
    description: "Download Patreon creator posts, rewards, and subscriber content.",
    iconName: "Heart",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
    primaryColor: "bg-orange-500",
    features: [
      "Download patron content",
      "Save creator posts",
      "Exclusive rewards",
      "Video content",
      "Image galleries",
      "Audio posts",
      "Tier-based content",
      "Creator updates"
    ],
    faqs: [
      {
        question: "Do I need to be a patron?",
        answer: "Yes, you can only download content from creators you support."
      },
      {
        question: "Are all reward tiers supported?",
        answer: "You can download content for your subscription tier and below."
      }
    ],
    badge: "Creator Support",
    inputPlaceholder: "https://www.patreon.com/posts/...",
    category: "social"
  },

  "gumroad-downloader": {
    name: "Gumroad",
    title: "Gumroad Product Downloader",
    description: "Download Gumroad purchased products, digital goods, and creator content.",
    iconName: "ShoppingBag",
    gradientFrom: "from-pink-500",
    gradientTo: "to-purple-600",
    primaryColor: "bg-pink-500",
    features: [
      "Download purchased products",
      "Digital asset management",
      "Creator content",
      "License information",
      "Product updates",
      "Bulk downloads",
      "Purchase history",
      "File organization"
    ],
    faqs: [
      {
        question: "Can I re-download purchases?",
        answer: "Yes, all purchased products can be re-downloaded from your library."
      },
      {
        question: "Are product updates included?",
        answer: "Yes, updated versions of purchased products are available for download."
      }
    ],
    badge: "Digital Marketplace",
    inputPlaceholder: "https://gumroad.com/l/...",
    category: "shopping"
  },

  // Gaming Platforms
  "itch-io-downloader": {
    name: "itch.io",
    title: "itch.io Game Downloader",
    description: "Download indie games, game assets, and creative projects from itch.io.",
    iconName: "Gamepad2",
    gradientFrom: "from-red-500",
    gradientTo: "to-pink-500",
    primaryColor: "bg-red-500",
    features: [
      "Download indie games",
      "Game development assets",
      "Creative projects",
      "Free and paid content",
      "Multiple platforms",
      "Game updates",
      "Developer tools",
      "Community content"
    ],
    faqs: [
      {
        question: "Can I download free games?",
        answer: "Yes, both free and purchased games can be downloaded."
      },
      {
        question: "Are game updates included?",
        answer: "Yes, updated versions of games are available for re-download."
      }
    ],
    badge: "Indie Games",
    inputPlaceholder: "https://username.itch.io/game",
    category: "gaming"
  },

  "steam-downloader": {
    name: "Steam",
    title: "Steam Game Downloader",
    description: "Download Steam games, workshop content, and game assets from your library.",
    iconName: "Gamepad2",
    gradientFrom: "from-blue-700",
    gradientTo: "to-blue-800",
    primaryColor: "bg-blue-700",
    features: [
      "Download owned games",
      "Steam Workshop content",
      "Game screenshots",
      "Achievement data",
      "Game reviews",
      "Friend library",
      "Sale information",
      "Game metadata"
    ],
    faqs: [
      {
        question: "Can I download games I don't own?",
        answer: "No, you can only download games and content from your Steam library."
      },
      {
        question: "Is Steam Workshop content included?",
        answer: "Yes, Workshop mods and content can be downloaded."
      }
    ],
    badge: "PC Gaming",
    inputPlaceholder: "https://store.steampowered.com/app/...",
    category: "gaming"
  },

  "epic-games-downloader": {
    name: "Epic Games",
    title: "Epic Games Store Downloader",
    description: "Download Epic Games Store games and free weekly games from your library.",
    iconName: "Gamepad2",
    gradientFrom: "from-gray-800",
    gradientTo: "to-black",
    primaryColor: "bg-gray-800",
    features: [
      "Download owned games",
      "Free weekly games",
      "Game updates",
      "DLC content",
      "Game metadata",
      "Achievement tracking",
      "Cloud saves",
      "Library management"
    ],
    faqs: [
      {
        question: "Can I download free weekly games?",
        answer: "Yes, games you've claimed from Epic's free weekly offers can be downloaded."
      },
      {
        question: "Are Unreal Engine assets included?",
        answer: "Game content can be downloaded, but Unreal Engine Marketplace assets require separate access."
      }
    ],
    badge: "PC Gaming Store",
    inputPlaceholder: "https://store.epicgames.com/...",
    category: "gaming"
  },

  "gog-downloader": {
    name: "GOG",
    title: "GOG Galaxy Game Downloader",
    description: "Download DRM-free games from GOG (Good Old Games) digital library.",
    iconName: "Gamepad2",
    gradientFrom: "from-purple-700",
    gradientTo: "to-purple-800",
    primaryColor: "bg-purple-700",
    features: [
      "Download DRM-free games",
      "Classic game revivals",
      "Modern indie titles",
      "Game installers",
      "Bonus content",
      "Game updates",
      "Multiple languages",
      "Offline installers"
    ],
    faqs: [
      {
        question: "Are games truly DRM-free?",
        answer: "Yes, all GOG games are DRM-free and can be downloaded as standalone installers."
      },
      {
        question: "Can I download bonus content?",
        answer: "Yes, soundtracks, artwork, and other bonus materials are included."
      }
    ],
    badge: "DRM-Free Gaming",
    inputPlaceholder: "https://www.gog.com/game/...",
    category: "gaming"
  }
};

// Helper function to generate page from config
export function generateDownloaderPage(slug: string) {
  const config = downloaderConfigs[slug];
  if (!config) return null;
  
  return {
    config,
    slug
  };
}