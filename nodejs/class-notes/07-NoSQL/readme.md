# MongoDB

* Download & Install -> CommunityServer: https://www.mongodb.com/try/download/community
* Download & Install -> Compass: https://www.mongodb.com/try/download/compass 
* Register -> Cloud: https://account.mongodb.com
* Install -> VSCode Extension: https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode 

### MongoDB

* Installation Notes:

    * Windows
        * MongoDB CommunityServer & Compass
            * https://www.mongodb.com/try/download/community
            * https://lms.clarusway.com/mod/lesson/view.php?id=4089
        * MongoDB Shell (Mongosh): 
            * https://www.mongodb.com/try/download/shell [Select "Windows 64-bit (8.1+) (MSI)"]
            * Set "uncheck" for "install just for you"

    * MacOS
        * HomeBrew: https://brew.sh
            ```sh
            # HomeBrew Install
            $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            $ brew --version
            ```
        * MongoDB CommunityServer: https://www.mongodb.com/docs/v4.0/tutorial/install-mongodb-on-os-x/
            ```sh
            $ brew tap mongodb/brew
            $ brew install mongodb-community
            $ brew services start mongodb-community
            ```
        * MongoDB Compass: https://www.mongodb.com/try/download/compass 
        
    * Linux:
        * https://www.mongodb.com/docs/manual/administration/install-on-linux/


### Mongosh:
    ```sh
    $ mongosh --version
    $ mongosh # defaul:local
    $ mongosh mongodb://localhost:27017/
    ```