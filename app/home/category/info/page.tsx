import React, { FC } from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col gap-4 p-4 relative">
      <div className="pb-4">
        <div className="text-2xl font-semibold">Tarih Testi</div>
        <div>Talimatları okuyarak bu test hakkında bilgi alabilirsin.</div>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-3 w-full flex items-center justify-center">
          <div className="col-span-3 w-4/5 h-64 relative px-16 py-8">
            <Image
              src={"/profilePhoto.png"}
              alt="Category İnfo"
              fill
              className="shadow-md object-contain"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-around h-full w-full gap-6 pt-4">
          <Piece content={{ title: "Tarih:", text: "28/12/2022" }} />
          <Piece content={{ title: "Süre Sınırı:", text: "30 Dakika" }} />
          <Piece content={{ title: "Deneme:", text: "Tek Deneme" }} />
          <Piece content={{ title: "Puan:", text: "200 Puan" }} />
        </div>
      </div>
      <div className="py-4">
        <div className="text-lg font-medium pb-6">Talimatlar</div>
        <div className="whitespace-pre-wrap">
          {`Bu sınav çoktan seçmeli 5 sorudan oluşmaktadır. Kısa sınavlarda başarılı olmak için konulara hakim olmak önemlidir. Aşağıdakileri aklınızda bulundurun:

Zamanlama - Her deneme için size 30 dakika verildiğinden, her denemenizi bir oturuşta tamamlamanız gerekir.
Cevaplar - Son denemenizden sonra cevap seçeneklerinizi gözden geçirebilir ve doğru cevaplarla karşılaştırabilirsiniz.

Başlamak için "Başlat" düğmesini tıklayın. Testiniz bittiğinde, "Gönder" düğmesi ile sonuçları gönderin.`}
        </div>
        <button className="absolute right-4 -bottom-4 w-32 bg-gray-600 text-white rounded-full px-12 py-2">
          Başla
        </button>
      </div>
    </div>
  );
};

const Piece: FC<any> = ({ content }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="text-2xl font-semibold">{content.title}</div>
      <div className="text-xl">{content.text}</div>
    </div>
  );
};

export default page;
