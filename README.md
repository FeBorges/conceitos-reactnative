// Para que seja rodado junto com o backend e que seja possível percorrer o tech com map.
No formato original do cadastro no Insomnia estava estruturado como string, mas deve ser como array

**Ex:**
```json 
{
    "id": "be3274df-d149-42c4-8dff-6b671637a84e",
    "title": "Novo Item da lista2",
    "url": "Aqui entra URL",
    "techs": [
      "react",
      "json",
      "Mongo DB"
    ],
    "likes": 0
  },
```
**Função que percorre o array tech:**
  ```javascript
  <View style={styles.techsContainer}>
      {repository.techs.map(tech => (
        <Text key={tech} style={styles.tech}>
        {tech}
        </Text>           
      ))}
  </View>
  ```