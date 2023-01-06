import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengeContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted.toString().padStart(2, '0')}</span>
    </div>
  )
}
