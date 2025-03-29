import Image from "next/image"
import { Card, CardContent } from "./ui/card"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

interface MissionTeamProps {
  members: TeamMember[]
}

export function MissionTeam({ members }: MissionTeamProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member, i) => (
        <Card key={i} className="card-hover">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

