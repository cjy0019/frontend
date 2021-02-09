import React from 'react';

const DeliveryInfo = () => {
  return (
    <div>
      <div>
        <h2>배송 정보</h2>
        <span>배송 휴무일:샛별배송(휴무없음),택배배송(일요일)</span>
        <button>
          배송지 변경 안내
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <table>
        <tbody>
          <tr>
            <th>배송지</th>
            <td>
              <span>기본배송지</span>
              <p>서울시 강남구 청담동 간지맨</p>
              <span>택배배송</span>
            </td>
          </tr>
          <tr>
            <th>상세 정보</th>
            <td>
              <p>조재연,01098063260</p>
              <button>수정</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryInfo;
