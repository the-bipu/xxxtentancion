import Footer from "~/components/footer"
import Navigation from "~/components/navigation"

import logo from "/logoM.svg";

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white text-black">

            <img src={logo} alt="" className="md:w-1/2 w-11/12 md:relative absolute top-5" />
            <Navigation />

            <div className="flex flex-col gap-4 w-11/12 h-auto py-10">
                <div className="font-bold text-xl">Early Life</div>
                <div className="font-normal text-base text-justify">
                    On January 23, 1998, Jahseh Dwayne Ricardo Onfroy, better known as XXXTENTACION, was born in Plantation, Florida. X was raised mainly by his grandmother in Lauderhill, Florida due to his mother’s struggling financial situation at the time. Jahseh was never the perfect child and often got into a grave amount of trouble. He attended Margate Middle School, where he got expelled for multiple physical altercations with other students and then was sent to another school as a result. Six months later, X joined Piper High School, but dropped out during the 10th grade. X often told people that he was never the extrovert type and that he dealt with many mental health issues during his time in high school. He knew that the education system in America was not suited for him.

                    <br />
                    <br />

                    Jah’s love for music started after his aunt convinced him to join a school and church choir, which he ended up getting kicked out of for attacking another student. At one of the schools he attended, Jah started to listen to genres such as rap, nu-metal, and hard rock, which led him to pick up learning how to play the piano and guitar.
                </div>

                <div className="font-bold text-xl">The Start of his career</div>
                <div className="font-normal text-base text-justify">
                    After being released from the correctional facility, X started to write music and record it. He released his first song on Soundcloud in 2013 titled, “News/Flock”. That same year, X ended up in juvenile detention for illegal firearm possession charges. At the facility, he met Stokeley Clevon Goulbourne, an artist we all know by the name of Ski Mask the Slump God. They soon became close friends and began freestyling together to pass time in juvy. After getting out, X purchased a microphone to start recording his own music, which then inspired Ski to do the same. In 2014, Jah released his first ‘official’ song, titled “Vice City” to Soundcloud, under the name of XXXTENTACION. Jahseh also started his own Hip-Hop collective called “Members Only”, which Ski joined after leaving his own group. Members Only has yet to hit the mainstream, and I don’t think they will, but the tapes they have put out have many gems.

                    <br />
                    <br />

                    X came to the realization that music was the best way for him to express himself and feel comfort, which resulted in the start of something beautiful.
                </div>

                <div className="font-bold text-xl">Rise to Fame</div>
                <div className="font-normal text-base text-justify">
                    In 2015, a song that wasn’t under X’s name was released to Soundcloud. But in 2017, the track was officially released under the title, “Look At Me!”. This was X’s first hit song and it went uber viral on social media, as well as the charts. This track debuted at number 94 on the US Billboard hot 100 chart, peaking at number 34. This was X’s first charting single and was the one that basically blew up his career (The song has now surpassed 1 Billion streams).

                    <br />
                    <br />

                    On August 25, 2017, XXXTENTACION released his debut album titled 17. From the traction of his hit single, fans were eager to hear more from X. 17 debuted at number 2 on the Billboard top 200 (topped by Luv Is Rage 2 by Lil Uzi Vert) and sold 87,000 copies first week, which was beyond anyone’s expectations for an artist that popped up just that year.

                    <br />
                    <br />

                    Earlier in 2017, in May, he released a mixtape titled Revenge, which often gets overlooked by most listeners. It features some great tracks such as “Slipknot”, “YuNg BrAtZ”, and “Rip Roach”, all of them are some underrated gems by X.

                    <br />
                    <br />

                    But, 17 is, in my opinion, X’s greatest body of work. The project is an entry into X’s haunted teenage mind. 10 tracks that tell his story, the story of his deteriorating mental health, heart break, losing a loved one, and more. 17 is one of the most raw and vulnerable projects that we have seen in recent memory, it deserves the praise it got and the praise it continues to get today.

                    <br />
                    <br />

                    On March 16, 2018, just a few months before his passing, he released another album called ?. X took a completely new approach to this project and we were able to tell that he was actually having some fun. This album was his most versatile body of work. It contained latin music, lyrical rap, modern R&R, emo rap, and trap songs. Question Mark was X’s way of telling his fans that he is okay, that he was doing better mentally than he was before, but we all know that he still wasn’t in the best place.
                </div>

                <div className="font-bold text-xl">The Death of XXXTENTACION</div>
                <div className="font-normal text-base text-justify">
                    On June 18, 2018, X was at RIVA Motorsports, in Deerfield Beach, Florida, looking to purchase a motorcycle. After leaving the store and getting into his car, X was shot by a man named Dedrick Williams (3 other men were also charged with murder). He was rushed to the hospital immediately, where he was pronounced dead.

                    <br />
                    <br />

                    Jahseh was only 20 years old, just starting to gain success in the industry, and was brutally killed in what is said to be an attempted robbery. Many people believe that X predicted his own death because of snapchat stories and a music video that were posted just days before the incident. I remember that unfortunate day like it was yesterday. Just getting out of practice, I checked my phone to see that one of my favorite rappers at the time was shot multiple times. I remember not being able to move. I just sat there in the rain, in absolute shock and disbelief. June 18, 2018 was one of the worst days of my life, and I can guarantee that I’m not the only one who feels this way.
                </div>

                <div className="font-bold text-xl">Remembering Jahseh Onfroy</div>
                <div className="font-normal text-base text-justify">
                    Jahseh dealt with many demons ever since he was a young kid. There is no denying that he has done many terrible things over the years, but one thing I really respected about him was how much he wanted to change. The past year before his death, he dedicated all of his time to holding charity events, raising awareness for teenage mental health, and most importantly, he used his platform to address his own issues, hoping that it would help others with their own. He was on the right path and could have contributed so much to the world today. His music alone has saved a numerous amount of lives. X’s impact is undeniable and his legacy will continue to live on through his fans. Young legend, gone too soon.
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default AboutUs