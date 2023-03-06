/**
 * @swagger
 * /users:
 *   get:
 *     summary: 회원 목록 조회
 *     tags: [User]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                         name:
 *                           type: string
 *                           example: 짱구
 *                         email:
 *                           type: string
 *                           example: zddx1994@gmail.com
 *                         personal:
 *                           type: string
 *                           example: 1234566-1234567
 *                         prefer:
 *                           type: string
 *                           example: https://www.naver.com
 *                         pwb:
 *                           type: string
 *                           example: 12344
 *                         phone:
 *                           type: string
 *                           example: "01036978284"
 *                         og:
 *                           type: object
 *                           example:
 *                                 title:
 *                                    type: string
 *                                    example: "네이버"
 *                                 description:
 *                                     title: string
 *                                     example: "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요"
 *                                 image:
 *                                    title: string
 *                                    example: "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_21285241…"
 *
 *
 */

/**
 * @swagger
 * /users:
 *   post:
 *      summary: 회원가입 요청
 *      tags: [User]
 *      requestBody:
 *               required: true
 *               content:
 *                    application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                  name:
 *                                    type: string
 *                                    example: 짱구
 *                                  email:
 *                                    type: string
 *                                    example: zddx1994@gmail.com
 *                                  personal:
 *                                    type: string
 *                                    example: 1234566-1234567
 *                                  prefer:
 *                                    type: string
 *                                    example: https://www.naver.com
 *                                  pwb:
 *                                    type: string
 *                                    example: 12344
 *                                  phone:
 *                                    type: string
 *                                    example: 01036978284
 *
 *      responses:
 *               200:
 *                  description: 회원가입 성공
 *                  content:
 *                    application/json:
 *                      schema:
 *                         type: string
 *                         example: "6370932ef2d5296ee609f3d5"
 */
