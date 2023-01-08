import React from "react";
import styles from "../styles/Home.module.css";
import { Text, Group } from "@mantine/core";
import Link from "next/link";

export default function cv() {
  return (
    <>
      <div>
        <div className={styles.contain}>
          <Group position="apart">
            <Text size="35px" weight={800}>
              ABDALLAH SAHID DUMBUYA
            </Text>
          </Group>
          <div className={styles.cvbd}>
            <Group position="apart">
              <Text mb="lg">
                <Link href="http://www.absida8@gmail.com">
                  absida8@gmail.com
                </Link>
              </Text>
              <Text mb="lg">
                <Link href="https://github.com/Absidaa/Absida">github</Link>
              </Text>
              <Text mb="lg">
                <Link href="https://www.linkedin.com/in/absida-04b9b3232/">
                  linkedin
                </Link>
              </Text>
            </Group>
          </div>
          <Group position="apart">
            <Text size="lg" weight="bolder">
              ABOUT ME
            </Text>
          </Group>
          <Group>
            <hr className={styles.hr} />
          </Group>
          <Group position="apart" mb="lg">
            <Text>
              I&quot;m a Sierra Leonean. Basically, I&quot;ve gained experiences
              from different sectors of life. I&quot;ve been trading in the
              stock market for over a year now. My favourite stocks are Google,
              Tesla and Apple; sometimes I do day trading in the forex market.
              Lately, I have entered the crypto world. I&quot;m also a
              ghostwriter, I write for some folks about an idea they&quot;ve
              developed but couldn&quot;t write it down by themselves. In the
              academic year 2019-2020, I worked as an English teacher in Reims,
              France. My mission there was to motivate them to conquer their
              fear.
            </Text>
          </Group>
          <Group position="apart">
            <Text size="lg" weight="bolder">
              EDUCATION
            </Text>
          </Group>
          <Group>
            <hr className={styles.hr} />
          </Group>
          <Group position="apart" mb="xl">
            <Text>
              Intensive 3-month Full Stack Web Development bootcamp. Course
              languages:
              <Text weight="bold">
                JavaScript, HTML, CSS, SQL, git, GitHub, Heroku, Node js, React
                js, Next js
              </Text>
              The bootcamp is aimed at building web applications using Next
              js.The project is called <Text weight="bold">I-HELP</Text> and
              consists of An application that will be developed specifically to
              help immigrants to integrate into the system as much as possible.
              This is a two-sided application, one part is for the immigrant who
              is seeking assistance and the other end is for the expert
              individual who has gone through the system and helped many people.
              The helpers could walk you through the process until you get yours
              document. Help seekers can also review helpers so that others know
              whether they are legitimate or not. And I also create a personal
              website which I usually edit whenever I have free time. Address
              Milan, Italy Field of study Programs and general qualifications
            </Text>
          </Group>
          <Group position="apart">
            <Text size="lg" weight="bolder">
              DIGITAL SKILLS
            </Text>
          </Group>

          <Group>
            <hr className={styles.hr} />
          </Group>
          <Group mb="lg">
            <Text>
              JavaScript, HTML, CSS, SQL, git, GitHub, Heroku, Node js, React
              js, Next js & Tableau
            </Text>
          </Group>
          <Group position="apart">
            <Text size="lg" weight="bolder">
              WORKING EXPERIENCE
            </Text>
          </Group>
          <Group mb="lg">
            <hr className={styles.hr} />
          </Group>
          <Group>
            <Text className={styles.dat}>
              06/06/2022 – 15/09/2022 Sanremo, Italia.
            </Text>
          </Group>
          <Group position="apart" mb="xs">
            <Text size="md" weight="bold">
              English Teacher
            </Text>
          </Group>
          <Group>
            <Text>
              <Text>
                In Sanremo, Italy, I taught the children the basics of the
                English language.
              </Text>
              <Text> My duties were,</Text>
              <Text>
                • For them to learn new skills and apply them in daily
                activities
              </Text>
              <Text>• Improve efficiency and productivity.</Text>{" "}
              <Text>• Performed daily duties accurately and efficiently.</Text>{" "}
              <Text>
                • Demonstrate respect, friendliness and willingness to help
                wherever there is need.
              </Text>
            </Text>
          </Group>
          <Group position="apart" mb="lg">
            <Text className={styles.dat}>
              12/05/2018 – 07/10/2019 <Text>Acireale, Italy.</Text>
            </Text>
          </Group>
          <Group position="apart" mb="xs">
            <Text size="md" weight="bold">
              Waiter
            </Text>
          </Group>
          <Group position="apart" mb="lg">
            <Text mb="xl">
              <Text>Acireale, Italy.</Text>{" "}
              <Text>
                • I kept servers&quot; areas clean and stocked to scale up
                efficiency while working tables.
              </Text>
              <Text>
                • Maintained customer satisfaction by clarifying questions about
                orders e special items.
              </Text>
              • Customer satisfaction maintained with time checks from assess
              food and beverage needs.
              <Text>
                • Shared knowledge of menu items and flavors, enabling customers
                to make personal decisions based on taste and  to interest.
              </Text>
            </Text>
          </Group>
          <Group position="apart" mb="sm">
            <Text size="md" weight="bold">
              Mechanic
            </Text>
          </Group>
          <Group>
            <Text>
              I&quot;ve worked as a phone mechanic and installing software in PC
              in Sierra Leone
            </Text>
          </Group>
        </div>
      </div>
    </>
  );
}

//  return (
//    <div className={styles.pap}>
//      <div
//        style={{
//          position: "absolute",
//          left: "50%",
//          bottom: "-60%",
//          transform: "translate(-50%, -50%)",
//        }}
//      >
//        <Paper withBorder p="lg" style={{ maxWidth: "800px" }}>
//          <Group position="apart">
//            <Text size="xl" weight={600}>
//              Abdallah Sahid Dumbuya
//            </Text>
//          </Group>
//          <Group position="apart">
//            <Text mb="lg">
//              <a href="http://www.absida8@gmail.com">absida8@gmail.com</a>
//            </Text>
//            <Text mb="lg">
//              <a href="https://github.com/Absidaa/Absida">github</a>
//            </Text>
//            <Text mb="lg">
//              <a href="https://www.linkedin.com/in/absida-04b9b3232/">
//                linkedin
//              </a>
//            </Text>
//          </Group>
//          <Group position="apart">
//            <Text size="lg" weight={400}>
//              Working Experience
//            </Text>
//          </Group>
//          <Group>
//            <hr className={styles.hr} />
//          </Group>
//          <Group>
//            <Text>
//              In Sanremo, Italy, I taught the children the basics of the English
//              language. My duties were, • For them to learn new skills and apply
//              them in daily activities • Improve efficiency and productivity. •
//              Performed daily duties accurately and efficiently. • Demonstrate
//              respect, friendliness and willingness to help wherever there is
//              need. 12/05/2018 – 07/10/2019 Acireale, Italy • Kept server areas
//              clean and stocked to scale up efficiency while working tables. •
//              Maintained customer satisfaction by clarifying questions about
//              orders e special items. • Customer satisfaction maintained with
//              time checks from assess food and beverage needs. • Shared
//              knowledge of menu items and flavors, enabling customers to make
//              personal decisions based on taste and  to interest
//            </Text>
//          </Group>
//          <Group position="apart" mb="sm">
//            <Text>ABOUT ME</Text>
//          </Group>
//          <Group>
//            <Text>
//              I'm a Sierra Leonean. Basically, I've gained experiences from
//              different sectors of life. I've been trading in the stock market
//              for over a year now. My favourite stocks are Google, Tesla and
//              Apple; sometimes I do day trading in the forex market. Lately, I
//              have entered the crypto world. I'm also a ghostwriter, I write for
//              some folks about an idea they've developed but couldn't write it
//              down by themselves. In the academic year 2019-2020, I worked as an
//              English teacher in Reims, France. My mission there was to motivate
//              them to conquer their fear.
//            </Text>
//          </Group>
//        </Paper>
//      </div>
//    </div>
//  );
//}
//
