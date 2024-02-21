import React from 'react';
import { motion } from 'framer-motion';

export default function LearnMore() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-lg text-center sm:text-justify w-11/12 sm:w-5/6 mx-auto rounded-md px-4 sm:px-10 py-6 mt-6 mb-10 bg-blue-100"
    >
      <div>
        <h1 className='w-full text-center text-2xl 2xl:text-4xl font-bold pb-6'>The History of Ski Jumping</h1>
        <div>
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Bundesarchiv_Bild_183-61623-0009%2C_Harald_Pfeffer.jpg/400px-Bundesarchiv_Bild_183-61623-0009%2C_Harald_Pfeffer.jpg"
            alt="Ski Jumping"
            style={{ float: 'left', marginRight: '24px', maxWidth: '375px' }}
            whileHover={{ scale: 1.1 }}
            className='history-img'
          />

          <motion.p
            className='mb-3 2xl:text-2xl 2xl:leading-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Ski jumping, a thrilling winter sport that combines grace, skill, and courage, has a rich history dating back centuries. Its origins can be traced back to the rugged terrains of Norway and Sweden, where it was initially used as a mode of transportation during harsh winters. Early forms of ski jumping involved individuals propelling themselves over natural obstacles such as rocks and cliffs, often for practical purposes rather than sport.
          </motion.p>

          <motion.p
            className='mb-3 2xl:text-2xl 2xl:leading-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            One of the earliest documented ski jumping events occurred in Trysil, Norway, in 1862, where participants competed for both distance and style. As the sport gained popularity, ski jumping hills were purposefully constructed, allowing athletes to showcase their skills in front of larger audiences.
          </motion.p>

          <motion.img
            src="https://www.prints-online.com/t/164/olympics-1924-chamonix-619649.jpg.webp"
            alt="Ski Jumping"
            style={{ float: 'right', marginLeft: '24px', maxWidth: '275px' }}
            whileHover={{ scale: 1.1 }}
            className='history-img pt-2'
          />

          <motion.p
            className='mb-3 2xl:text-2xl 2xl:leading-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Throughout the late 19th and early 20th centuries, ski jumping continued to evolve, with athletes pushing the boundaries of distance and technique. The introduction of specialized equipment, such as aerodynamic ski suits and more streamlined skis, contributed to record-breaking performances and the advancement of the sport.
          </motion.p>

          <motion.p
            className='mb-3 2xl:text-2xl 2xl:leading-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Ski jumping gained international recognition with its inclusion in the inaugural Winter Olympics held in Chamonix, France, in 1924. Since then, it has remained a staple of the Winter Games, captivating audiences with its breathtaking displays of athleticism and precision.
          </motion.p>

          <motion.p
            className='mb-3 2xl:text-2xl 2xl:leading-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Over the decades, ski jumping has seen numerous innovations and refinements, including changes to equipment, technique, and competition formats. Today, the sport is governed by the International Ski Federation (FIS), which oversees regulations and ensures fair play across all levels of competition.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="h-1 bg-violet-900 mt-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <div style={{ clear: 'both' }}>
        <br />
        <h2 className='w-full text-center text-2xl font-bold pb-6 2xl:text-4xl 2xl:leading-10'>The Rules of Ski Jumping</h2>

        <motion.img
          src="https://cdn.britannica.com/32/21332-004-1CEAFF2F/skis-Jumping-Ski-jumping-equipment-length-jump.jpg"
          alt="Ski Jumping Rule 1"
          style={{ float: 'left', marginRight: '24px', maxHeight: '200px' }}
          whileHover={{ scale: 1.1 }}
          className='rule-img'
        />
        <motion.img
          src="https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-319-30808-1_131-1/MediaObjects/328406_0_En_131-1_Fig9_HTML.gif"
          alt="Ski Jumping Rule 2"
          style={{
            float: 'right', marginLeft: '24px', maxHeight: '200px'
          }}
          whileHover={{ scale: 1.1 }}
          className='rule-img'
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='2xl:text-2xl 2xl:leading-9'
        >
          Ski jumping is governed by a set of rules and regulations designed to ensure fairness and safety for all athletes. The primary objective is for competitors to achieve the longest distance while maintaining good technique. Moreover, these regulations serve as a foundation for the integrity of competitions.
        </motion.p>

        <motion.div
          style={{ clear: 'both' }}
          className='mt-12 sm:mb-3 sm:mt-3 md:mt-8 md:mb-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.img
            className=' mb-4 sm:mb-0 w-5/6 sm:w-3/5 mx-auto'
            src="https://i1.sndcdn.com/visuals-000288354420-edBt7E-t1240x260.jpg"
            alt="rules"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>

        <ol className="list-decimal pl-8">
          <motion.li
            className="mb-5
            2xl:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <strong>In-run:</strong> Athletes begin their jump from a designated starting point, known as the in-run. The in-run typically consists of a steep slope that allows skiers to build momentum before takeoff.
          </motion.li>
          <motion.li
            className="mb-5
            2xl:text-2xl 2xl:leading-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <strong>Takeoff:</strong> Skiers launch themselves into the air from a curved ramp known as the takeoff. Proper technique during takeoff is crucial for achieving maximum distance and maintaining stability in flight.
          </motion.li>
          <motion.li
            className="mb-5 2xl:text-2xl 2xl:leading-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <strong>Flight:</strong> Once airborne, skiers adopt a streamlined aerodynamic position to minimize air resistance and maximize distance. Judges evaluate the athlete's posture and technique during flight, awarding points for style and form.
          </motion.li>
          <motion.li
            className="mb-5 2xl:text-2xl 2xl:leading-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <strong>Landing:</strong> A successful jump culminates with a smooth landing on the hill's slope. Skiers aim to land with stability and grace, maintaining control throughout the descent.
          </motion.li>
          <motion.li
            className="mb-5
            2xl:text-2xl 2xl:leading-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            <strong>Scoring:</strong> Distance is the primary factor in determining a skier's score, with longer jumps receiving higher marks. Judges also assess the athlete's style and execution, awarding additional points for elegance and control.
          </motion.li>
          <motion.li
            className="mb-5
            2xl:text-2xl 2xl:leading-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
          >
            <strong>Safety:</strong> Safety measures, including hill design, equipment regulations, and medical personnel on standby, are paramount in ski jumping to prevent injuries and ensure the well-being of athletes.
          </motion.li>
        </ol>
        <div className='my-6 flex flex-col sm:flex-row gap-10 item-center justify-center 2xl:my-8'>
          <motion.img
            className='w-5/6 mx-auto  sm:mx-0 sm:w-2/5'
            src="https://www.firsttracksonline.com/wp-content/uploads/2017/02/lahti-ski-jump-training.jpg"
            alt="judjes"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            className='w-5/6 mx-auto  sm:mx-0 sm:w-2/5'
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-02/220209-sara-takanashi-cc-1230a-86fa3e.jpg"
            alt=""
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </div>

      <motion.div
        className="h-1 bg-violet-900 mt-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <div className='mb-4'>
        <h2 className='w-full text-center text-2xl font-bold pb-6 mt-8 2xl:text-4xl'>The Future of Ski Jumping</h2>

        <div className="flex flex-col sm:flex-col xl:flex-row justify-between gap-4 items-center">
          <div className="flex-1">
            <motion.p
              className='mb-5 2xl:text-2xl 2xl:leading-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              The future holds promise for further innovation and growth. Advancements in technology, training methods, and equipment are expected to push the boundaries of what is possible.
            </motion.p>

            <motion.p
              className='mb-5 2xl:text-2xl 2xl:leading-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              One definite area of advancement lies in equipment design with manufacturers constantly refining skis and aerodynamic gear to enhance performance and safety. Additionally, advancements in sports science and biomechanics are enabling athletes to optimize their technique.
            </motion.p>
          </div>

          <div className='flex-1 lg:w-3/4'>
            <motion.img
              src="https://i0.wp.com/static.dezeen.com/uploads/2009/01/holmenkollen-ski-jump-by-julien-de-smedt-2-squ-2-jds_hop_elevation.jpg"
              alt="Ski Jumping"
              className="mb-4 max-w-9/12 mx-auto sm:max-w-96 lg:max-w-full lg:mx-auto 2xl:max-w-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
            />
          </div>

          <div className="flex-1">
            <motion.p
              className='mb-5 2xl:text-2xl 2xl:leading-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Furthermore, efforts to make ski jumping more accessible to a diverse range of athletes are underway, with initiatives aimed at breaking down barriers to entry and promoting diversity within the sport.
            </motion.p>

            <motion.p
              className='mb-5 2xl:text-2xl 2xl:leading-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              In the coming years, ski jumping is poised to continue its evolution as a thrilling and dynamic winter sport, captivating audiences with its blend of athleticism, artistry, and sheer adrenaline. It's sure to remain a source of inspiration for generations to come.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
