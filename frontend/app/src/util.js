
export const getFullName = (cv) => `${cv.lastNames.toUpperCase()}, ${cv.firstNames}`
export const skillsSorted = (cv) => {
  const skills = {}
  for (const job of cv.jobHistory) {
    for (const skill of job.skills) {
      if (skills[skill]) {
        skills[skill] += 1
      } else {
        skills[skill] = 1
      }
    }
  }
  const sortedEntries =  Object.entries(skills).sort((a, b) => {
    const aKey = a[1]
    const bKey = b[1]
    return bKey - aKey
  })
  return sortedEntries //.map(entry => entry[0])
}

export const getSkillsWithExperienceLengthSorted = (cv) => {
  const skills = {}
  for (const job of cv.jobHistory) {
    const jobLengthInYears = calculateJobLengthInYears(job)
    for (const skill of job.skills) {
      if (skills[skill]) {
        skills[skill] += jobLengthInYears
      } else {
        skills[skill] = jobLengthInYears
      }
    }
  }
  const sortedEntries =  Object.entries(skills).sort((a, b) => {
    const aKey = a[1]
    const bKey = b[1]
    return bKey - aKey
  })
  return sortedEntries //.map(entry => entry[0])
}

const calculateJobLengthInYears = (job) => {
  const diffInMs = (new Date(job.to)) - (new Date(job.from))
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365)
  return Math.round(diffInYears)
}

export const getStarredActions = (cv) => {
  console.log(cv)
  return [
    'Development of a multi-client (Web, Android/iOS-App), micro-service application (hardcoded)',
    'Development of a multi-client (Web, Android/iOS-App), micro-service application (hardcoded)',
    'Development of a multi-client (Web, Android/iOS-App), micro-service application (hardcoded)',
  ]
}

