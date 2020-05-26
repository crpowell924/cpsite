import sphero from "./assets/sphero.jpg"

export default `
# Block X
This application was requested by a client who works closely with visually impaired students. She wanted an app that could be used by these students in order to write a list of commands to move the beloved Sphero robot through a maze. This way, they can learn some basic concepts of coding, like creating an executable script. Oh, by the way, Sphero is a physical robot. Here’s Sphero:

![Sphero](${sphero})

While there were other Sphero controller apps on the market, none of them supported the necessary accessibility functions for them to be usable for our target audience: students with visual impairments. These students use VoiceOver (available as a feature on all iOS devices) in order to interact with their technology, and without a bit of attention from the software developers on each individual app, the feature is all but useless. So my team got to work. Here are some obstacles and solutions we found:
1. Working with hardware 
> News flash: the internet has everything. We found most of what we needed for a Bluetooth Low Energy (BLE) connected controller of our Sphero, written in Swift. After some tinkering and translating units, our backend was mostly settled. The Sphero could be controlled from our Swift script, including turning 360 degrees, moving forward by any number of meters, and even changing the color of an LED light on the robot. However, I can’t understate the amount of dedicated research one of my teammates put in to discover this controller.

2. Learning a new Swift framework (SwiftUI)
> While I had written an entire app in Swift before, I ended up having to basically re-learn the language. My previous experience with Swift’s UIKit programmatic framework actually didn’t translate much into using the recently-released (at the time) SwiftUI framework. Thankfully, the latter was easier to learn than the former, and I always love an excuse to learn something new. But, this did present a learning curve I hadn’t expected when we took on the project. Once we got through this learning curve (thanks, YouTube tutorials!), we had a lovely drag-and-drop interface for the robot command script.

3. Making a fully accessible application
> Apple’s accessibility features have limits. While there was plenty of documentation and tutorials for the UIKit accessibility features, the tutorials for SwiftUI were still just slowly hitting the internet this spring— and sadly, accessibility is often not as high on developers’ priority lists as it should be. So, using the sparse (and sometimes nonexistent) Apple documentation did not get us to a satisfactory point with our application. Our solution was to implement some auditory feedback for users separate from VoiceOver. If you watch the below video, you’ll hear a “ding” sound as I drag the command blocks into the drop area to add them to the script. It lets the user know that they are hovering over the correct area, and if they drop a block, it will get added to the script. This, along with a lot of VoiceOver features not shown, made an app that could feasibly be used by a visually impaired student with no instructor assistance. 

At the end of our two month project, we did not get the app a full deployment stage, but it was a capstone project during a pandemic, okay? In reality, our client had expected it to be a two-semester project, so she was really pleased with the foundation we had made -- and thanks to some future team of UNC students, I’m looking forward to seeing it hit the App store later this year.

`