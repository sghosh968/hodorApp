import firebase from 'react-native-firebase';

const decorateDocumentFromDocumentSnapshot = (documentSnapshot) => {
  const documentID = documentSnapshot.id;
  const documentData = documentSnapshot.data();
  return { ...documentData, id: documentID };
}

export const getCollection = async (collectionName) => {
  try {
    const query = firebase.firestore().collection(collectionName);
    const collectionFetchResponse = await query.get();
    const collectionDocuments = collectionFetchResponse.docs;
    if (collectionFetchResponse && collectionFetchResponse.size > 0) {
      return collectionDocuments.map(document => {
        const documentID = document.id;
        const documentData = document.data();
        return { ...documentData, id: documentID };
      });
    } else {
      return [];
    }
  } catch (e) {
    console.log('Error in getCollection');
    console.log(e);
  }
}

export const addDocument = async (collectionName, document) => {
  try {
    const query = firebase.firestore().collection(collectionName);
    const documentAddResponse = await query.add(document)
    const documentSnapshot = await documentAddResponse.get();
    return decorateDocumentFromDocumentSnapshot(documentSnapshot);
  } catch (e) {
    console.log('Error in addDocument');
    console.log(e);
  }
}