
import { motion, useScroll } from "motion/react"

export default function ScrollLinked() {
    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                id="scroll-indicator" className="z-40"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    backgroundColor: "#3F51B5",
                }}
            />
        </>
    )
}
