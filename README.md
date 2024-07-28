# Swapdeal Application Project



https://github.com/user-attachments/assets/50165627-7b48-412b-930f-1a9ebc8d7799


https://github.com/user-attachments/assets/ad1e041b-08a1-473c-8561-f1ed72eeed24



https://github.com/user-attachments/assets/fab12871-069d-48d8-ad82-da4ed081be1a



https://github.com/user-attachments/assets/b6a5b2ce-3c17-4d43-b762-11b13cf110d7




* SwapDeal is the product exchanging Application which it has functions such as 
    * buyers management,
    * User management , 
    * User Authentication , 
    * product management,
    * delivery and payment management
    * mobile first application
* hence this application comes under the category of CRM application (Customer Relationship Management)
* With SwapDeal, you can create account , selling the products and buying the products and managing payments
* Swapdeal is easy to use, powerful to manage the business related product exchanging application.
* Try Swapdeal today and see the difference it can make .

# Technologies used
* NodeJS ( server environment)
* ExpressJS ( routing and middleware integration)
* Bcrypt ( password encryption and authentication)
* Multer (file management in servers)
* MongoDB (database)
* Mongoose ( ORM )
* Dotenv ( env )
* Cors ( permiting the cross origin policy)
* Cloudinary ( assets handling cloud platform)
* Thunder client ( Api testing)
* ReactJS ( UI framework)
* Vite ( Hot Module Replacement )
* Tailwind Css (styling framework)
* React router dom ( route management )
* React hot toast ( toast messages)
* Docker and Docker-Compose (Shipment)
  
# Project Usage (online)
* First go to backend api link to start the api (its deployed in render.com free tier , hence it will spun down after inactive of 15 seconds)
  * https://swapdeal-application-backend.onrender.com

* After loading the api then go to project link
    * https://willowy-cannoli-224d62.netlify.app/

# Project Usage (offline)
* Create an account in **Cloudinary , Mongodb atlas**
* Install **Docker and docker-compose** on you system 
* clone the repository `git clone https://github.com/KISHOREkevin/swapdeal-application.git`
* `cd swapdeal-application`
* inside server folder and client folder create `.env` file
* in `server folder` ,enter the following code in the `.env` file :
     * `MONGO_URI=Your-mongodb-url`
     * `SERVER_PORT=Your-port-number`
     * `SALT_ROUNDS=10`
     * `CLOUD_NAME=Your-cloudinary-cloud-name`
     * `CLOUD_API_KEY=Your-cloudinary-api-key`
     * `CLOUD_API_SECRET=Your-cloudinary-api-secret`
       
* In `client folder` , enter the following code in the `.env` file:
     * `VITE_BACKEND_URL=http://localhost:3000/api`
* get backward where the `docker-compose.yml` file is located.
* then run the command `docker-compose up`.
* then go to `http://localhost:5173/` and access the application.

