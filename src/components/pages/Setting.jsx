import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from 'sonner'


const getAvatarUrl = (name) => {
    return `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(name)}`
}

const Setting = () => {
    const [name, setName] = useState("John Doe")
    const [email, setEmail] = useState("john.doe@example.com")
    const [bio, setBio] = useState("Passionate about technology and design.")
    const [isPrivateAccount, setIsPrivateAccount] = useState(false)
    const [notificationPreference, setNotificationPreference] = useState("all")
    const handleSave = () => {
        // Here you would typically send the updated settings to your backend
        console.log("Saving settings:", { name, email, bio, isPrivateAccount, notificationPreference })
        toast({
          title: "Settings saved",
          description: "Your settings have been updated successfully.",
        })
      }

    return (
        <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Manage your account settings and preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-full">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={getAvatarUrl(name)} alt={name} />
                    <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <Button>Change Avatar</Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="privacy">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="private-account"
                    checked={isPrivateAccount}
                    onCheckedChange={setIsPrivateAccount}
                  />
                  <Label htmlFor="private-account">Private Account</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  When your account is private, only people you approve can see your photos and videos.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="notifications">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="notification-preference">Notification Preference</Label>
                  <Select value={notificationPreference} onValueChange={setNotificationPreference}>
                    <SelectTrigger id="notification-preference">
                      <SelectValue placeholder="Select your notification preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Notifications</SelectItem>
                      <SelectItem value="mentions">Mentions Only</SelectItem>
                      <SelectItem value="none">No Notifications</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSave}>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
    )
}

export default Setting