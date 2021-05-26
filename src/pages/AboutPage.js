import React from 'react';
import './AboutPage.css';
import profile from './profile.png';
import Layout from './Layout';

function AboutPage(props) {
  return (
    <Layout>
      <div className="AboutPage">
        <div className="profileImage">
          {/* <img src={profile}></img> */}
          <div className="aboutPageOverlay">
            <p>Hey I'm Akinjide Baruwa</p>
            <p>
              A contemporary Nigerian artist whose main medium is painting. His
              studio practice His studio practice also
            </p>
            <p>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </p>
          </div>
        </div>
        <div className="contentSection">
          <div>
            <span>Intro</span>
            <hr style={{ width: 25 }}></hr>
            <ul>
              <p>Born 1968 in Osogbo, living and working in Osogbo, Nigeria.</p>
            </ul>
          </div>
          <div>
            <span>Education</span>
            <hr></hr>
            <ul>
              <li>
                1992-1994 Osun State College of Education, Ila-Orangun, Nigeria
              </li>
              <li>1995-1998 Obafemi Awolowo University, Ile-Ife, Nigeria</li>
            </ul>
          </div>
          <div>
            <span>Exhibitions</span>
            <hr></hr>
            <ul>
              <li>
                1993 Afas Art Exhibition, Ila-Orangun Mbari Mbayo Museum, Art
                Studio, Osogbo Pro-Democracy Fund Raising Exhibition, Osogbo
              </li>
              <li>1995-1998 Obafemi Awolowo University, Ile-Ife, Nigeria</li>
              <li> 2000 Signature Gallery, Abuja</li>
              <li> 2003 “Best of Ife”, Goethe Institute, Lagos</li>
              <li>
                2004 “Art Bazaar”, Dakart, Biennial Art Festival, Dakar, Senegal
              </li>
              <li>
                2005 “Art Competition”, African Artist Resource Center, Lagos.
              </li>
              <li>
                2008 “Best 10 Nigerian Artists”, African Artist Foundation,
                Lagos
              </li>
              <li> 2013 “Mbari Mbayo”, Nike Gallery/US Embassy, Lagos</li>
              <li>
                {' '}
                2015 "Baa Ruu Waa Artistry", Pan-African University, Lagos
              </li>
              <li> 2016 “Siege Of Hyena”, Ramada Hotel, Kassel, Germany</li>
              <li>
                2016 “Fund Raising exhihibition, for Women-empowerment ”,
                British Council, Lagos.
              </li>
              <li>
                2017 “Osogbo Art School And New Direction”, Pan-African
                University, Lagos.
              </li>
            </ul>
          </div>
          <div>
            <span>PUBLIC SITE SPECIFIC INSTALLATIONS</span>
            <hr></hr>
            <ul>
              <li>
                “Sound of distant drum”, mural, Deutsches Haus, Cultural
                Association, Ile-Ife (2017)
              </li>
            </ul>
          </div>
          <div>
            <span>PRIZES, GRANTS</span>
            <hr></hr>
            <ul>
              <li>
                Winner of the African Artist Resource Center’s “Art
                Competition”, 2005
              </li>
              <li>
                Nominated for “Best 10 Nigerian Artists”, African Artist
                Foundation, Lagos, 2008
              </li>
              <li>Artist Residency at Signature Gallery, Lagos, 2011-2013</li>
            </ul>
          </div>
          <div>
            <span>PUBLICATIONS</span>
            <hr></hr>
            <ul>
              <li>
                Jess Castellote (ed.): Contemporary Nigerian Art in Lagos
                Private Collections. Ibadan, Bookcraft Publishers, 2012.
              </li>
              <li>
                Moussa Kone: In the Studio with Akinjide Baruwa.
                www.orishaimage.com, 2016 (Online)
              </li>
              <li>
                Baa Waa Ruu Artistry; Guardian newspaper (March 6th 2016).
              </li>
            </ul>
          </div>
          <div>
            <span>BOOK COVER ARTWORK</span>
            <hr></hr>
            <ul>
              <li>
                Amanda Villepastour (ed.): The Yoruba God of Drumming.
                Transatlantic
              </li>
              <li>
                Perspectives on the Wood that talks. University Press of
                Mississippi, 2015.
              </li>
            </ul>
          </div>
          <div>
            <span>ABOUT AKINJIDE BARUWA</span>
            <hr></hr>
            <ul>
              <li>
                &nbsp;&nbsp;&nbsp; Akinjide Baruwa is a contemporary Nigerian
                artist living and working in Osogbo, Nigeria. He studied art at
                the Obafemi Awolowo University in Ile-Ife and his main medium is
                painting. His studio practice also includes various forms of
                textile dying and drawing on paper.
              </li>
              <br></br>
              <li>
                &nbsp;&nbsp;&nbsp;In a process-oriented method Baruwa partly
                produces the pigments for his artwork by himself, based on the
                use of plants as herbal medicine in Yoruba culture. His work
                brings together local forms of artwork and a contemporary
                approach, based on the philosophy of modern African art
                movements.
              </li>
              <br></br>
              <li>
                &nbsp;&nbsp;&nbsp;The artist founded the Baa Ruu Waa Artistry as
                a reaction to the need for a change in society and to adapt the
                local philosophy to the needs of the modern society. Akinjide
                Baruwa has exhibited his work in Nigeria and internationally,
                his work is mentioned in various publications.
              </li>
            </ul>
          </div>
          <div>
            <span>THE BAA RUU WAA ARTISTRY</span>
            <hr></hr>
            <ul>
              <li>
                &nbsp;&nbsp;&nbsp; The Baa Ruu Waa Artistry is a section of the
                Mbari Mbayo Art Movement, that is notable for the revival of the
                mind and a re-dedication to the culture in which one belongs.
                Activities of the Mbari Mbayo can be traced back to the
                legendary ‘Ori Olokun’ renaissance, stirred by activism in the
                art, in the early days of the University of Ile-Ife, now known
                as Obafemi Awolowo University, and Eastern Nigeria, where ‘Uli
                paintings’ are relayed and endure.
              </li>
              <br></br>
              <li>
                &nbsp;&nbsp;&nbsp;Baa Ruu Waa Artistry is an obsession and
                obviously a style inspired by the ingenuity inherent in the
                Mbari Mbayo and Osogbo Sacred Art movement pivoted by Ulli Bier.
                Academic artists as against bucolic artist are too parallel to
                meet at any time. In between Baa Ruu Waa Artistry sought to
                present a new typeset with a twist of forms and figures with all
                aligned rifts. Giving birth to a form that is owned, in hues and
                appeal, giving rise to a new garb in esoteric and obviously an
                artistic totem.
              </li>
              <br></br>
              <li>
                &nbsp;&nbsp;&nbsp;Baa Ruu Waa Artistry methodologically and
                periodically explores the mood in stages of activities of
                characters, such that an onlooker will find a place empty on
                stage to fill. Moods ranging from nostalgia to revolt are
                prevalent with strokes any could ordinarily make or perceive.
              </li>
            </ul>
          </div>
          <div>
            <span>ARTIST STATEMENT</span>
            <hr></hr>
            <ul>
              <li>
                &nbsp;&nbsp;&nbsp; “Vague memories of visit to an uncle, who
                paints on glass-medium, at an age I could barely remember,
                inspired my curiosity and I asked for one of his works as a
                gift. Hung in our sitting-room, my father would not want to see
                it, tagged it “anti-island”. I would sneak where it was kept by
                my mother and steal a long look.
              </li>
              <br></br>
              <li>
                &nbsp;&nbsp;&nbsp;When I started elementary school. I had a
                group, we were a trio, with bond – and that bond is only to
                draw. At home, another group of four. Taking a break from
                whatever we were engaged-in, is just to draw whatever we feel we
                can’t use words to say. Great joy this brought to our hearts.
                Six years we spent at school and at home and all were to
                disperse, a soul-pal ‘asked me what you want to do?’ I replied
                ‘Become a doctor’ but he tacitly corrected me ‘Become an artist’
                I thought he meant ill-luck for me, I was mad. It sounded like a
                curse.
              </li>
              <br></br>
              <li>
                &nbsp;&nbsp;&nbsp;When I was in the college, my art teacher
                would come to me to borrow my drawing book to teach the final
                year students, the Chiaroscuro. Later at the University, I met
                Chief Ibigbami, a pioneer member of the Ori Olokun renaissance,
                as if I was his image in this mirror, he loved me with such a
                passion that I had to expend such energy on my studies and won’t
                go home during holidays but get books from him and the library
                to read them for the next academic session. One day, ‘Baba’, as
                we used to call him, asked me what are you doing, what are you
                not doing? I knew the answer, and that it is left to me.
              </li>
              <br></br>
              <li>
                &nbsp;&nbsp;&nbsp;Now I am in the future, a professional artist
                and have collected experience over some sixteen years, exhibited
                among the best of Ile-Ife in the year 2003, many exhibitions in
                Nigeria, few abroad and recently completed a two years Artist in
                Residence program in Lagos at the Signature Gallery, at Ikoyi,
                Lagos. The experience as an artist in residency is such a song.”
                (Akinjide Baruwa)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
