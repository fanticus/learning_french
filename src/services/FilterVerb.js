export const getFilterTest = async ({ propsData }) => {
  // вынести в отдельные функции
  const {
    idVerb,
    item: { id },
    filter,
    dataArr,
    getFilterChanged,
    propInclination
  } = propsData
  const VerbObj = {
    indicatif: [],
    subjonctif: [],
    conditionnel: []
  }
  let filterObj
  const checkConjugationsArr = dataArr.find(verbObj => verbObj.id === idVerb).inclinations[propInclination].conjugations
  let checkConjugation = null
  if (Object.keys(filter).length === 0) {
    checkConjugation = checkConjugationsArr.find(conjugation => conjugation.id === id).id
    VerbObj[propInclination].push(checkConjugation)
    filterObj = {
      [idVerb]: { ...VerbObj }
    }
  } else {
    const inCheckId =
      filter[idVerb][propInclination].length > 0
        ? filter[idVerb][propInclination].find(idConjugation => idConjugation === id)
        : false
    if (inCheckId) {
      const oldFilterObj = { ...filter }
      const isUndefinedArr = Object.values(oldFilterObj[idVerb]).filter(inclinationArr => inclinationArr.length === 0)
      const otherIdArr = oldFilterObj[idVerb][propInclination].filter(idConjugation => idConjugation !== id)

      if (isUndefinedArr.length === 2 && otherIdArr.length === 0) delete oldFilterObj[idVerb]
      else if (otherIdArr.length > 0) oldFilterObj[idVerb][propInclination] = otherIdArr
      else oldFilterObj[idVerb][propInclination] = []
      filterObj = oldFilterObj
    } else {
      checkConjugation = checkConjugationsArr.find(conjugation => conjugation.id === id).id
      filter[idVerb][propInclination].push(checkConjugation)
      filterObj = { ...filter }
    }
  }
  console.log('filterObj', filterObj)
  await getFilterChanged(filterObj)
}
