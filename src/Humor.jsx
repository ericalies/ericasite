import './App.css'
import aclURL from './assets/ACL.jpg'
import belladonnaURL from './assets/belladonna.png'
import mcsweeneysURL from './assets/mcsweeneyslogo.png'
import picURL from './assets/PICLogo.png'
import splitsiderURL from './assets/splitsider.png'
import walrusURL from './assets/walrus.jpg'
import wapoURL from './assets/wapo.png'

function Humor() {
    return (
        <>
            <blockquote className="montserrat-alternates-bold align-middle"><h1
                className='montserrat-alternates-regular'>Selected Humor & Satire</h1></blockquote>

            <div className="mt-10">
            </div>

            <div className="grid gap-x-8 gap-y-[60px] grid-cols-1 md:grid-cols-[25%_75%]">

                <img className="object-scale-down object-right" src={walrusURL}
                     alt="An illustration of a Taylor Swift Bracelet for Beatles lovers. The bracelet text reads, It's me, Hi. I'm the Walrus, it's me."/>
                <div>

                    <h2>Daily Shouts in <em>The New Yorker</em></h2>

                    <ul className='list-disc'>
                        <li className='leading-loose'><a
                            href="https://www.newyorker.com/humor/daily-shouts/a-taxonomy-of-migraines"
                            className='styled-link'>A Taxonomy of Migraines</a></li>
                        <li className='leading-loose'><a
                            href="https://www.newyorker.com/humor/daily-shouts/welcome-aboard-our-newest-roller-coaster-the-freelancer"
                            className="styled-link">Welcome Aboard Our Newest Roller Coaster, The Freelancer</a>
                        </li>
                        <li className='leading-loose'><a
                            href="https://www.newyorker.com/humor/daily-shouts/if-ebenezer-scrooge-had-instagram"
                            className='styled-link'>If Ebenezer Scrooge Had Instagram</a> - illustrated by Elly
                            Lonon
                        </li>
                        <li className='leading-loose'><a
                            href="https://www.newyorker.com/humor/daily-shouts/taylor-swift-friendship-bracelets-for-beatles-lovers"
                            className='styled-link'>Taylor Swift Friendship Bracelets For Beatles Lovers</a> -
                            illustrated by Elly Lonon
                        </li>
                        <li className='leading-loose'><a
                            href="https://www.newyorker.com/humor/daily-shouts/dissertations-written-by-someone-who-has-friends-with-kids"
                            className='styled-link'>Dissertations Written by Someone Who Has Friends With Kids</a> -
                            written with Kerry Elson
                        </li>
                        <li className='leading-loose'><a
                            href="https://www.newyorker.com/humor/daily-shouts/spells-to-ward-off-the-sunday-scaries"
                            className='styled-link'>Spells to Ward Off the Sunday Scaries</a> - written with Kerry
                            Elson
                        </li>
                    </ul>

                </div>

                <img className="object-scale-down object-right" src={wapoURL}
                     alt="The logo of the Washinton Post, rendered in Gothic lettering."/>
                <div>
                    {/* <hr className='my-5'></hr> */}
                    <h2>The Washington Post</h2>
                    <ul className='list-disc'>
                        <li className='leading-loose'><a
                            href="https://www.washingtonpost.com/graphics/outlook/2020/08/12/if-odysseus-had-instagram/"
                            className='styled-link'>If Odysseus Had Instagram</a> - illustrated by Elly Lonon
                        </li>
                    </ul>

                </div>

                <img className="object-scale-down object-right" src={mcsweeneysURL}
                     alt="the McSweeney's logo, which is an old time-y chair"/>

                <div>


                    <h2>McSweeney's Internet Tendency</h2>
                    <ul className='list-disc'>
                        <li className='leading-loose'><a
                            href="https://www.mcsweeneys.net/articles/if-zeus-had-instagram"
                            className='styled-link'>If
                            Zeus Had Instagram</a> - illustrated by Elly Lonon
                        </li>

                        <li className='leading-loose'><a
                            href="https://www.mcsweeneys.net/articles/faq-your-visit-to-flow-state"
                            className='styled-link'>FAQ: Your Visit to Flow State</a> - written with Caitlin
                            Kunkel
                        </li>
                        <li className='leading-loose'><a
                            href="https://www.mcsweeneys.net/articles/this-is-not-a-breakup-its-a-pivot-toward-life-without-denise"
                            className='styled-link'>This is Not a "Breakup," It's a Pivot Toward Life Without
                            Denise</a>
                        </li>
                        <li className='leading-loose'><a
                            href="https://www.mcsweeneys.net/articles/five-beautiful-dead-bodies-every-aspiring-actress-dreams-of-playing"
                            className='styled-link'>List: Five Beautiful Dead Bodies Every Aspiring Actress Dreams
                            of
                            Playing</a></li>
                        <li className='leading-loose'><a
                            href="https://www.mcsweeneys.net/articles/using-your-mental-health-benefits-a-heros-journey/?preview=force"
                            className='styled-link'>Using Your Mental Health Benefits: A Hero's Journey</a> -
                            written
                            with Caitlin Kunkel
                        </li>
                        <li className='leading-loose'><a
                            href="https://www.mcsweeneys.net/articles/what-your-myers-briggs-type-says-about-whether-youll-take-the-myers-briggs-test"
                            className='styled-link'>What Your Myers Briggs Type Says ABout Whether You'll Take the
                            Myers
                            Briggs Test</a></li>


                    </ul>

                </div>

                <img className="object-scale-down object-right" src={belladonnaURL}
                     alt="the Belladonna logo in whimsical lettering"/>

                <div>

                    <h2>The Belladonna</h2>
                    <ul className='list-disc'>
                        <li className='leading-loose'><a
                            href="https://thebelladonnacomedy.com/the-house-of-inner-torment-cdd547b2dcac"
                            className='styled-link'>The House of Inner Torment</a></li>
                        <li className='leading-loose'><a
                            href="https://thebelladonnacomedy.com/code-red-they-want-to-tax-break-our-tampons-2116c6e786cb"
                            className='styled-link'>Don't Let Greedy Uteri Bleed Tennessee Dry!</a> - written with
                            Caitlin Kunkel
                        </li>
                        <li className='leading-loose'><a
                            href="https://medium.com/thebelladonnacomedy/top-secret-messages-about-curly-hair-care-declassified-f40ae5ef4bbe"
                            className='styled-link'>Top Secret Messages About Curly Haircare, Declassified</a> -
                            written
                            with Kerry Elson
                        </li>
                        <li className='leading-loose'><a
                            href="https://medium.com/thebelladonnacomedy/its-not-that-i-m-not-listening-it-s-that-women-s-voices-just-sound-like-squawk-squawk-squawk-3b180e9ea2be"
                            className='styled-link'>It's Not That I'm Not Listening, It's That Women's Voices Just
                            Sound
                            Like 'Squawk Squawk Squawk!'</a></li>
                    </ul>
                </div>

                <img className="object-scale-down object-right" src={splitsiderURL}
                     alt="the logo of the defunct comedy site, Splitsider"/>

                <div>

                    <h2>Splitsider Humor Section</h2>
                    <ul className='list-disc'>
                        <li className='leading-loose'><a
                            href="http://splitsider.com/2016/09/the-life-changing-magic-of-tidying-up-after-your-breakup-with-trevor-by-erica-lies/"
                            className='styled-link'>The Life Changing Magic of Tidying Up After Your Breakup with
                            Trevor</a></li>
                        <li className='leading-loose'><a
                            href="http://www.vulture.com/2018/03/men-find-me-intimidating-just-because-im-a-sentient-robot-sent-here-from-the-future-to-destroy-john-connor-by-erica-lies.html"
                            className='styled-link'>Men Find Me Intimidating Just Because I'm a Sentient Robot Sent
                            Here
                            From the Future to</a> Destroy John Connor
                        </li>
                    </ul>

                </div>

                <img className="object-scale-down object-right" src={picURL}
                     alt="the logo for humor website Points in Case"/>

                <div>

                    <h2>Points in Case</h2>
                    <ul className='list-disc'>
                        <li className='leading-loose'><a
                            href="https://www.pointsincase.com/lists/if-we-talked-to-entrepreneurs-the-way-we-talk-to-artists"
                            className='styled-link'>If We Talked to Entrpreneurs the Way We Talk to Artists</a></li>
                        <li className='leading-loose'><a
                            href="https://www.pointsincase.com/lists/password-recovery-questions-written-by-beth-your-high-school-frenemy"
                            className='styled-link'>Password Recovery Questions Written by Beth, Your High School
                            Frenemy</a></li>
                    </ul>

                </div>

                <img className="object-scale-down object-right" src={aclURL}
                     alt="illustration by James Boyle of the types of people you meet at ACL fest, including the Human Skittle and The Ghost of Stevie Ray Vaughn"/>

                <div>

                    <h2>Misc Faves</h2>
                    <ul className='list-disc'>
                        <li><a href="https://www.austinmonthly.com/the-20-people-you-always-meet-at-acl-fest/"
                               className='styled-link'>The 20 People You Always Meet at ACL Fest</a> - Austin Monthly -
                            written with
                            Alex Baia
                        </li>
                        <li className='leading-loose'><a
                            href="https://www.robotbutt.com/2016/12/24/santa-waterboards-enemy-war-christmas/"
                            className='styled-link'>Santa Waterboards the Enemy in the War on Christmas</a> - Robot Butt
                            - written with Alex Baia
                        </li>
                        <li className='leading-loose'><a
                            href="https://medium.com/slackjaw/this-new-year-will-be-different-ill-be-remade-anew-1fe56bd9d76f"
                            className='styled-link'>This New Year Will be Different. I'll Remake Myself Anew</a> -
                            Slackjaw -

                        </li>


                    </ul>

                </div>

            </div>
        </>
    )
}

export default Humor