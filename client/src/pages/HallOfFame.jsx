import React from 'react'
import { motion } from 'framer-motion';

export default function HallOfFame() {
  const top10jumpers = [
    {
      name: 'Gregor Schlierenzauer',
      country: 'at',
      wins: 53,
      img: 'https://img.redbull.com/images/c_crop,x_0,y_0,h_2970,w_2228/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/12/6/er8sepszdfsdojfmux24/gregor-schlierenzauer-portrait',
      desc: `Gregor Schlierenzauer is an Austrian ski jumper renowned for his remarkable achievements in the sport. Born on January 7, 1990, in Innsbruck, Austria, Schlierenzauer has been a dominant force in ski jumping since his debut on the international stage.Throughout his career, Schlierenzauer has amassed numerous accolades, including multiple World Cup titles and Olympic medals.His exceptional talent, combined with his dedication to the sport, has made him one of the most successful ski jumpers of all time. 
      Known for his technical prowess and consistent performance, Schlierenzauer has set numerous records in ski jumping history.His ability to soar through the air with precision and grace has earned him admiration from fans and fellow athletes alike. Off the slopes, Schlierenzauer is known for his humility and sportsmanship, earning him respect within the ski jumping community.`
    },
    {
      name: 'Matti Nykanen',
      country: 'fi',
      wins: 46,
      img: 'https://premium.vgc.no/v2/images/21d16cee-b4eb-40eb-87e0-753a75c341f0?fit=crop&format=auto&h=2779&w=1900&s=ceac61bc1a30ed9692229ea8cbe565fdc14525d6',
      desc: `Matti Nykänen, a Finnish ski jumping icon, is renowned for his extraordinary talent and remarkable achievements in the sport. Born on July 17, 1963, in Jyväskylä, Finland, Nykänen rose to prominence during the 1980s as one of the most dominant athletes in ski jumping history. Nykänen's career is adorned with numerous accolades, including four Olympic gold medals and one silver medal. His unparalleled success at the Winter Olympics solidified his status as one of Finland's greatest athletes and earned him global recognition. In addition to his Olympic triumphs, Nykänen also clinched multiple World Championship titles and World Cup victories throughout his illustrious career. His exceptional jumping ability, combined with flawless technique and mental toughness, set him apart from his competitors and established him as a legend in the sport.
      Off the hill, Nykänen's life was marked by both triumphs and tribulations.  `
    },
    {
      name: 'Adam Malysz',
      country: 'pl',
      wins: 39,
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Adam_Malysz.jpg',
      desc: `Adam Małysz, hailing from Poland, is a legendary figure in the world of ski jumping, celebrated for his remarkable talent and extraordinary achievements. Born on December 3, 1977, in Wisła, Poland, Małysz became synonymous with excellence in ski jumping during his illustrious career.

      Małysz's journey to greatness began in the late 1990s when he burst onto the international scene with his exceptional jumping prowess and unwavering determination. Throughout his career, he amassed an impressive collection of medals, including four Olympic medals (three silver and one bronze) and four World Championship titles.
      
      One of Małysz's most notable achievements is his dominance in the FIS Ski Jumping World Cup, where he secured four overall titles.`
    },
    {
      name: 'Kamil Stoch',
      country: 'pl',
      wins: 39,
      img: 'https://static.berkutschi.com/berkutschi/images/jumpers/000/000/196/small/4321_STOCHKamil.jpeg?1637833700',
      desc: `Kamil Stoch, a Polish ski jumping sensation, has etched his name in the annals of the sport's history with his remarkable achievements and unwavering determination. Born on May 25, 1987, in Zakopane, Poland, Stoch emerged as one of the most dominant athletes in ski jumping during the 2010s.

      Stoch's journey to success is marked by numerous accolades, including three Olympic gold medals, making him one of the most decorated ski jumpers in Olympic history. His triumphs at the 2014 Sochi Olympics and the 2018 Pyeongchang Olympics solidified his status as a national hero and global icon.
      
      In addition to his Olympic success, Stoch has also clinched multiple World Championship titles and FIS Ski Jumping World Cup victories throughout his career..`
    },
    {
      name: 'Stefan Kraft',
      country: 'at',
      wins: 39,
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/01/20150927_FIS_Summer_Grand_Prix_Hinzenbach_4619.jpg',
      desc: `Stefan Kraft is an Austrian ski jumper who has made a significant impact in the sport. Born on May 13, 1993, in Schwarzach, Austria, Kraft has risen through the ranks to become one of the top ski jumpers in the world.In the 2014-2015 season, he claimed his first World Cup victory in Zakopane, Poland.
      
      However, it was during the 2016-2017 season that Kraft truly made his mark on the sport. He dominated the World Cup circuit, clinching the overall title with consistent performances and multiple victories. Additionally, he won three gold medals at the 2017 World Championships in Lahti, Finland, showcasing his prowess on the international stage.
      
      One of Kraft's most notable achievements came in 2017 when he set the world record for the longest ski jump at the time, soaring an incredible 253.5 meters (832 feet) in Vikersund, Norway.`
    },
    {
      name: 'Janne Ahonen',
      country: 'fi',
      wins: 36,
      img: 'https://hs.mediadelivery.fi/img/468/535ff610cac0423eb8c7fddf052e6337.jpg',
      desc: `Janne Ahonen, a Finnish ski jumping legend, is revered for his remarkable career spanning over two decades. Born on February 11, 1977, in Lahti, Finland, Ahonen emerged as one of the most accomplished athletes in the history of the sport.

      Throughout his illustrious career, Ahonen amassed an impressive collection of accolades, including multiple Olympic medals, World Championship titles, and World Cup victories. His consistent performances on the ski jumping circuit established him as a dominant force in the sport and earned him widespread admiration from fans and peers alike.
      
      Ahonen's competitive spirit and unwavering determination propelled him to the upper echelons of ski jumping, where he regularly contended for podium finishes and championship titles. His exceptional talent, combined with meticulous training and technical proficiency, set him apart as one of the greatest ski jumpers of his generation.`
    },
    {
      name: 'Jens Weisslog',
      country: 'de',
      wins: 33,
      img: 'https://jens-weissflog.de/wp-content/uploads/sites/19/2022/03/Jens_Weissflog_Oberwiesenthal_Skispringer_Siege_Olympia3.jpg',
      desc: `Jens Weissflog, hailing from the former East Germany, etched his name in the annals of ski jumping history as one of the sport's most formidable competitors. Born on July 21, 1964, in Johanngeorgenstadt, Weissflog's journey to greatness began at a young age.

      With a career spanning from the late 1970s to the early 1990s, Weissflog's dominance on the ski jumping circuit was unparalleled. He captured the hearts of fans worldwide with his graceful style and impeccable technique off the ski jump. Weissflog's prowess earned him numerous Olympic and World Championship titles, cementing his status as a legend in the sport.
      
      Beyond his athletic achievements, Weissflog's legacy endures as a symbol of perseverance and determination. Despite facing stiff competition from rivals, he remained resilient, overcoming adversity to emerge victorious on numerous occasions.`
    },
    {
      name: 'Ryoyo Kobayashi',
      country: 'jp',
      wins: 31,
      img: 'https://d2a3o6pzho379u.cloudfront.net/137476.jpg',
      desc: `Ryoyu Kobayashi, representing Japan, has emerged as a rising star in the world of ski jumping in recent years. Born on November 8, 1996, in the city of Hachimantai, Kobayashi's journey to success began on the slopes of his native country.

      Kobayashi burst onto the international ski jumping scene with his exceptional talent and remarkable performances. His fearless approach and technical skill have propelled him to the top of the sport, earning him numerous victories on the World Cup circuit and prestigious titles at the Four Hills Tournament and World Championships.
      
      With each soaring leap off the ski jump, Kobayashi captivates audiences with his fluidity and precision in the air. His achievements have not only brought glory to Japanese ski jumping but have also inspired a new generation of athletes in the country and beyond.`
    },
    {
      name: 'Martin Schmitt',
      country: 'de',
      wins: 28,
      img: 'https://static.berkutschi.com/berkutschi/images/news/000/023/749/xlarge/schmitt_engelberg_18_Kopie.jpg?1564070983',
      desc: `Martin Schmitt, a renowned ski jumper from Germany, made a significant impact on the sport during his illustrious career. Born on January 29, 1978, in Villingen-Schwenningen, Schmitt's journey to the pinnacle of ski jumping began at a young age.

      Schmitt's talent and dedication quickly propelled him to success on the international stage. Throughout the late 1990s and early 2000s, he dominated the World Cup circuit, clinching numerous victories and prestigious titles. His impressive performances earned him widespread acclaim and solidified his status as one of the sport's greatest competitors.
      
      Among Schmitt's most notable achievements are his multiple victories at the prestigious Four Hills Tournament and his gold medal win at the 2002 Winter Olympics in Salt Lake City, where he soared to victory in the individual large hill event.`
    },
    {
      name: 'Andreas Felder',
      country: 'at',
      wins: 25,
      img: 'https://d2a3o6pzho379u.cloudfront.net/85665.jpg',
      desc: `Andreas Felder, hailing from Austria, is celebrated as one of the most accomplished ski jumpers in the history of the sport. Born on August 7, 1962, in Schwarzach im Pongau, Felder's journey to ski jumping stardom began in the picturesque mountains of his homeland.

      Felder's exceptional talent and natural ability quickly became evident as he rose through the ranks of competitive ski jumping. Throughout the 1980s and 1990s, he consistently dazzled audiences with his soaring leaps and flawless technique, earning numerous victories on the World Cup circuit and prestigious titles at the World Championships.
      
      Among Felder's most notable achievements are his gold medal win at the 1992 Winter Olympics in Albertville, where he triumphed in the individual large hill event, and his multiple victories at the prestigious Four Hills Tournament.`
    },

  ]

  return (
    <div className='bg-slate-100 bg-opacity-90 w-5/6 sm:w-5/6 md:w-2/3 my-4 rounded-md mx-auto mb-8'>
      {top10jumpers.map((jumper, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-between p-4 lg:p-3 border-b border-black py-6 leading-7 lg:py-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex flex-col sm:flex-col lg:flex-row w-full items-center">
            <div className=' w-11/12 flex flex-col items-center justify-center sm:w-11/12 sm:flex sm:flex-col sm:items-center sm:justify-center  lg:w-6/12' style={{ position: 'relative' }}>
              <motion.img
                src={jumper.img}
                alt=""
                className="w-3/4 mr-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              />
              <div className='bg-black text-white text-lg font-semibold w-8 h-8 flex items-center justify-center rounded-full' style={{ position: 'absolute', top: '6px', left: '6px' }}>{index + 1}</div>
              <motion.div
                className='w-3/4 text-center mt-2 font-semibold text-lg italic bg-purple-800 text-white'
                style={{ letterSpacing: '0.15rem' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {jumper.wins} wins
              </motion.div>
            </div>
            <motion.div className='w-11/12 sm:w-11/12 lg:w-6/12' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 + 0.5 }}>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}>
                <div className="flex items-center justify-center sm:justify-center md:justify-start sm:pt-2">
                  <motion.img
                    src={`https://flagcdn.com/24x18/${jumper.country}.png`}
                    alt={jumper.country}
                    className="mr-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  />
                  <motion.div
                    className="font-semibold text-lg 2xl:text-3xl italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {jumper.name}
                  </motion.div>
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                >
                  <div className="text-md 2xl:text-2xl 2xl:leading-9 text-justify sm:text-justify sm:pr-3">{jumper.desc}</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
