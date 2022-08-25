-- Connect to the database
\c devjngaf6e6ng2;

INSERT INTO players (name, rank_this_week, rank_last_week, country, events, avg_points, total_points, money_earned, is_favorite, image) VALUES 
('Scottie Scheffler', 1, 1, 'USA', 52, 10.26, 533.53, '$14,046,910', true, 'https://media.bleacherreport.com/image/upload/w_800,h_533,c_fill/v1649635491/okdw8igolpkxrmgzzgvl.jpg'),
('Cameron Smith', 2, 2, 'AUS', 43, 9.01, 387.42, '$10,107,897', false, 'https://i.guim.co.uk/img/media/3ea40c45b3a73b69c4f30b00f04d314186efd0f2/0_124_5361_3216/master/5361.jpg?width=620&quality=45&fit=max&dpr=2&s=767ef3fb7ed2b22b3760ce2fcaf0849d'),
('Patrick Cantlay', 3, 4, 'USA', 42, 8.61, 361.63, '$9,369,605', true, 'https://upload.wikimedia.org/wikipedia/commons/e/e9/PGA_BMW_Championship_-_51411968122.jpg'),
('Rory McIlroy', 4, 3, 'UK', 46, 8.14, 374.59, '$8,654,566', true, 'https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2022-07/Rory%20McIlroy_0.jpg?itok=c0TyCE2t'),
('Xander Schauffele', 5, 6, 'USA', 46, 7.34, 337.47, '$7,427,299', true, 'https://media.philstar.com/photos/2022/08/23/xander-schauffele-pga-tour_2022-08-23_13-04-03.jpg'),
('Jon Rahm', 6, 5, 'ESP', 44, 7.22, 317.48, '$5,248,220', true, 'https://www.golfchannel.com/sites/default/files/2022/03/14/rahm_1920_players22_d5.jpg'),
('Justin Thomas', 7, 7, 'USA', 49, 6.58, 322.32, '$6,829,576', true, 'https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2020/08/justin-thomas-2020-wgc-fedex-st-jude-close-up.jpg.rend.hgtvcom.966.644.suffix/1596538716349.jpeg'),
('Colin Morikawa', 8, 8, 'USA', 49, 6.50, 318.54, '$4,837,271', true, 'https://images.squarespace-cdn.com/content/v1/5601dac0e4b09de7ae50400c/1618336413424-LMN4K600GSQAAQKHIMPW/Collin%2BMorikawa.jpg?format=1000w'),
('Will Zalatoris', 9, 9, 'USA', 52, 6.36, 330.87, '$9,405,082', false, 'https://www.ajc.com/resizer/UfP2LjGMMKGgqUBslLgsvVkGQp8=/814x458/cloudfront-us-east-1.images.arcpublishing.com/ajc/OFTJSMVNMA4VUTDEQVTEJXV6FY.jpg'),
('Matt Fitzpatrick', 10, 11, 'UK', 51, 6.14, 312.91, '$7,012,672', false, 'https://www.golfchannel.com/sites/default/files/2022/06/19/fitzpatrick_1920_usopen22_d4_trophy.png'),
('Viktor Hovland', 11, 10, 'NOR', 52, 6.13, 318.67, '$4,868,461', false, 'https://www.the-sun.com/wp-content/uploads/sites/6/2022/04/Transfer-News-Template-28-1.jpg?w=1320'),
('Sam Burns', 12, 12, 'USA', 49, 5.91, 289.66, '$7,073,986', false, 'https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2022/3/sam-burns.jpeg.rend.hgtvcom.966.773.suffix/1647735237270.jpeg'),
('Jordan Spieth', 13, 13, 'USA', 47, 5.74, 269.92, '$5,018,444', true, 'https://media.cnn.com/api/v1/images/stellar/prod/220418091931-01-jordan-spieth-rbc-heritage.jpg?c=16x9&q=h_720,w_1280,c_fill'),
('Tony Finau', 14, 14, 'USA', 52, 5.38, 279.76, '$6,117,886', true, 'https://sportshub.cbsistatic.com/i/r/2022/08/01/6aa8b3ea-9791-48e7-a678-d9107676526e/thumbnail/770x433/06687f6e9f64ba3151f835057ad779c9/tony-finau.jpg'),
('Billy Horschel', 15, 15, 'USA', 51, 4.71, 240.01, '$4,940,600', false, 'https://www.gannett-cdn.com/presto/2021/03/29/PMJS/cd8821fe-7ac2-422c-ab7c-58866b2ca469-AP_Match_Play_Golf.jpg?width=1320&height=882&fit=crop&format=pjpg&auto=webp');
