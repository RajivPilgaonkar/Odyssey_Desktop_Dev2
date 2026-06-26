========= FRESH INSTALL ON DEV ================
1. Let's say the directory where you want to install is 'E:\node_projects\vivaphysics\desktop\v1'
2. md client (Using a nodeJS command prompt, run as Administrator)
3. cd client
3. git clone https://rajiv_p@bitbucket.org/rajiv_p/vivaphysics-react-frontend.git
4. npm install
5. npm start

========= PRODUCTION ============
1. go to the 'client' folder
2. delete the build folder, if it exists
3. npm run build
4. Use winSSH to connect to Digital Ocean
5. cd release_bkp_dir
6. mkdir release_07May2019 (based on the date)
7. cd release_07May2019 
8. mv ../../release/* . (move contents from current release folder)
9. cd ../../release
10. Using WinSCP, copy contents from build folder into the release folder
11. try out the updates from the browser
12. You don't need to kill 'serve' and restart the process again
13. In case you needed to restart serve, 'nohup serve -s -p 9001 release/ &'


====== UPDATE ON DEV ====
1. cd client (make required changes)
2. npm start


