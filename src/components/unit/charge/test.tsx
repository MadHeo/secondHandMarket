const UsePointInfo = () => {
    const { isActive, onClickToggle } = UseToggle()
    const { data: fetchUserData } = UseFetchUserLoggedIn()
    const { createPointTransactionOfLoading } =
      UseCreatePointTransactionOfLoading()
    const onClickPaymentPoint = async (val: string) => {
      if (!window.IMP) return
      const { IMP } = window
      IMP.init('imp10670440')
  
      const IMPData: RequestPayParams = {
        pg: 'kakaopay',
        pay_method: 'card', // 결제수단
        merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
        amount: Number(val), // 결제금액
        name: `point${val}`, // 주문명
        buyer_name: fetchUserData?.fetchUserLoggedIn.name, // 구매자 이름
        buyer_tel: '',
        buyer_email: fetchUserData?.fetchUserLoggedIn.email, // 구매자 이메일
      }
  
      IMP.request_pay(IMPData, async (response: RequestPayResponse) => {
        const { success, error_msg, imp_uid } = response
  
        if (success) {
          console.log('결제 성공', imp_uid)
          const { data } = await createPointTransactionOfLoading({
            variables: {
              impUid: imp_uid as string,
            },
          })
          console.log(data)
        } else {
          alert(`결제 실패: ${error_msg}`)
        }
      })
    }