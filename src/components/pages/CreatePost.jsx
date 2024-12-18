import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from 'sonner';

const CreatePost = () => {
    const [content,setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        toast({
            title:"Post Created",
            description:"Your post has been successfully created"
        });
        navigate('/')
    }
    return (
        <div className='container mx-auto'>
            <Card>
                <CardHeader>
                    <CardTitle>Create a New Post</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className='grid w-full gap-4'>
                            <div className='flex flex-col space-y-1.5'>
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    placeholder="What's on your mind?"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    rows={4}
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
          <Button type="submit">Create Post</Button>
        </CardFooter>
            </Card>
        </div>
    )
}

export default CreatePost