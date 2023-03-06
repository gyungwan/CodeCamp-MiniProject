/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: 입력받은 번호로 토큰 인증 요청
 *     tags: [Token]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "01036978284"
 *
 *     responses:
 *       '200':
 *         description: 토큰 요청 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: 01036978284으로 인증 문자가 전송되었습니다.
 */

/**
 * @swagger
 * /tokens/phone:
 *          patch:
 *              summary: 토큰 인증 확인
 *              tags: [Token]
 *              requestBody:
 *                       required: true
 *                       content:
 *                            application/json:
 *                                 schema:
 *                                     type: object
 *                                     properties:
 *                                               phone:
 *                                                  type: string
 *                                                  required: true
 *                                                  example: 0101234456
 *                                               token:
 *                                                  type: string
 *                                                  required: true
 *                                                  example: 1234
 *
 *              responses:
 *                       200:
 *                          description: 인증 성공
 *                          content:
 *                            application/json:
 *                              schema:
 *                               items:
 *                                  type: string
 *                                  example: true
 */
