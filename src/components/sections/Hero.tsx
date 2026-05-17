'use client'
import { Button } from "@/components/ui/button/button";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from "react";
import { FaDownload, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import Typed from "typed.js";


export default function Hero() {
  const t = useTranslations();
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [...t.raw('skills.skills-web')],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
    return () => typed.destroy()
  }, [t]);


  return (
    <div className={`
    parent
      flex flex-row justify-between
    `}>
      <div className={`
        content
        relative
        space-y-10
        m-auto text-center
        mt-5
    `}>
        {/* <span className={`
        absolute
        top-0
        left-0 w-3 h-3
        rounded-full
        bg-green-600
        dark:bg-green-800
        ring-2 ring-background
        `} /> */}
        <Typography className={`w-fit`} variant={"inlineCode"}>{t('Hero.badge')}</Typography>
        <Typography variant={"h1"}>
          {t('Hero.title')}
        </Typography>
        <Typography variant={"h2"}>
          {t('Hero.subtitle')}
        </Typography>
        <Typography variant={"h3"}>
          <span ref={el} />
        </Typography>
        <Typography variant={"large"}>{t('Hero.description')}</Typography>
        <div className={`
        flex gap-5
        justify-center
        `}>
          <Button style={{ cursor: "pointer" }} variant={"secondary"}
            size={"lg"}>
            <FaLinkedin />
            {t('Hero.button-linkedin')}
            {/* <Icon.Linkedin /> */}
          </Button>
          <Button style={{ cursor: "pointer" }} variant={"default"} size={"lg"}>
            <FaGithub />
            {t('Hero.button-github')}
            {/* <Icon.Linkedin /> */}
          </Button>
          <Button style={{ cursor: "pointer" }} variant={"outline"} size={"lg"}>
            <FaDownload />
            {t('Hero.button-resume')}
            {/* <Icon.Linkedin /> */}
          </Button>
          <Button style={{ cursor: "pointer" }} variant={"link"} size={"lg"}>
            <FaMailBulk />
            {t('Hero.button-contact')}
            {/* <Icon.Linkedin /> */}
          </Button>
        </div>
        <Button style={{ width: "100%", fontSize: 35 }} variant={"ghost"} size={"lg"}>
          {t('Hero.button-project')}
          {/* <Icon.Github /> */}
        </Button>
        <div className={`
        flex flex-wrap gap-5
        `}>
          {/* {skills.map((skill, index) => (
          <Badge
            key={index}
            variant={index % 2 === 0 ? "destructive" : "secondary"}>
            {skill}
          </Badge>
        ))} */}
        </div>
      </div>
      <figure className={`
        image
        relative
        bg-red-500
        m-auto
        hidden
        `}>
        <picture>
          <source srcSet="images/myImage.webp" type="image/webp" />
          <img style={{ width: "100%" }} src="images/myImage.webp" alt="Profile" />
        </picture>
      </figure>
    </div>
  )
}
