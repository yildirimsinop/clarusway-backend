# PERSONNEL API

### ERD:

![ERD](./erdPersonnelAPI.png)

### Folder/File Structure:

```
    .env
    .gitignore
    index.js
    readme.md
    src/
        config/
            dbConnection.js
        models/
            department.model.js
            personnel.model.js
        controllers/
            department.controller.js
            personnel.controller.js
        routes/
            department.router.js
            personnel.router.js
        middlewares/
            errorHandler.js
            findSearchSortPage.js
        helpers/
            passwordEncrypt.js
```