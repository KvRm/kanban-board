import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../main'

export const firestore = async () => {
  let docRef

  try {
    docRef = doc(db, 'board', 'nqtCVhAOD77A8gbuRJoK')
    const val = await getDoc(docRef)
    console.log(val.data())
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }

  return docRef
}
