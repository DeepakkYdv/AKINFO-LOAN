import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  icon: string
  title: string
  desc: string
  tag: string
}

export default function ServiceCard({ icon, title, desc, tag }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <span className={styles.tag}>{tag}</span>
    </div>
  )
}
