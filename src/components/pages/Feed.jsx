import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Heart, MessageCircle, Share2 } from 'lucide-react'

const stories = [
    { id: 1, user: 'John Doe' },
    { id: 2, user: 'Jane Smith' },
    { id: 3, user: 'Alice Johnson' },
    { id: 4, user: 'Bob Brown' },
    { id: 5, user: 'Emma Wilson' },
    { id: 6, user: 'Michael Lee' },
]

const posts = [
    { id: 1, user: 'John Doe', content: 'This is a sample post', likes: 10, comments: 5 },
    { id: 2, user: 'Jane Smith', content: 'Another sample post', likes: 15, comments: 3 },
    { id: 3, user: 'Alice Johnson', content: 'Yet another post', likes: 20, comments: 7 },
]

const suggestions = [
    { id: 1, user: 'Emma Wilson' },
    { id: 2, user: 'Michael Lee' },
    { id: 3, user: 'Olivia Davis' },
]

const getAvatarUrl = (name) => {
    return `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(name)}`
}

const StoryAvatar = ({ user }) => (
    <div className="flex flex-col items-center space-y-1">
        <Avatar className="w-16 h-16 ring-2 ring-primary">
            <AvatarImage src={getAvatarUrl(user)} alt={user} />
            <AvatarFallback>{user[0]}</AvatarFallback>
        </Avatar>
        <span className="text-xs">{user.split(' ')[0]}</span>
    </div>
)

const Feed = () => {
    return (
        <div className='container mx-auto p-4 flex flex-col md:flex-row'>
            <div className='md:w-2/3 md:pr-4'>
                {/* Stories Section */}
                <Card className="mb-6">
                    <CardContent className="p-4">
                        <ScrollArea className="w-full whitespace-nowrap">
                            <div className="flex w-max space-x-4 p-4">
                                {stories.map((story) => (
                                    <StoryAvatar key={story.id} user={story.user} />
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </CardContent>
                </Card>

                {/* Posts Section */}
                {posts.map((post) => (
                    <Card key={post.id} className="mb-6">
                        <CardHeader>
                            <div className="flex items-center">
                                <Avatar className="h-8 w-8 mr-2">
                                    <AvatarImage src={getAvatarUrl(post.user)} alt={post.user} />
                                    <AvatarFallback>{post.user[0]}</AvatarFallback>
                                </Avatar>
                                <span className="font-semibold">{post.user}</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>{post.content}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="ghost" size="sm">
                                <Heart className="mr-2 h-4 w-4" />
                                {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                {post.comments}
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Share2 className="mr-2 h-4 w-4" />
                                Share
                            </Button>
                        </CardFooter>
                    </Card>
                ))
                }
            </div>
            {/* Suggestions Section */}
            <div className="md:w-1/3 md:pl-4">
                <Card className="sticky top-4">
                    <CardHeader>
                        <h3 className="text-lg font-semibold">Suggestions for you</h3>
                    </CardHeader>
                    <CardContent>
                        {suggestions.map((suggestion) => (
                            <div key={suggestion.id} className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <Avatar className="h-8 w-8 mr-2">
                                        <AvatarImage src={getAvatarUrl(suggestion.user)} alt={suggestion.user} />
                                        <AvatarFallback>{suggestion.user[0]}</AvatarFallback>
                                    </Avatar>
                                    <span>{suggestion.user}</span>
                                </div>
                                <Button variant="outline" size="sm">Follow</Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Feed