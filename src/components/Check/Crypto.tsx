'use client'
// pages/crypto-deposit.tsx
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { FiCopy } from 'react-icons/fi';

const cryptoAddresses = {
    BTC: {
        address: 'bc1q3en8smw070t8n5c6y9dvwnp4qdmpudypvssmj0',
        qr: 'bc1q3en8smw070t8n5c6y9dvwnp4qdmpudypvssmj0',
    },
    ETH: {
        address: '0xe31c7Fe38B9229452D0CF0776aea739cb495AFE9',
        qr: '0xe31c7Fe38B9229452D0CF0776aea739cb495AFE9',
    },
    USDT: {
        address: 'TK1jubrB23VP4NJSt5D2LB2ufMhNUTCadx',
        qr: 'TK1jubrB23VP4NJSt5D2LB2ufMhNUTCadx',
    },
    BNB: {
        address: '0xe31c7Fe38B9229452D0CF0776aea739cb495AFE9',
        qr: '0xe31c7Fe38B9229452D0CF0776aea739cb495AFE9',
    },
};

const CryptoDeposit = () => {
    const [selectedCrypto, setSelectedCrypto] = useState<'BTC' | 'ETH' | 'USDT' | 'BNB'>('BTC');

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(cryptoAddresses[selectedCrypto].address);
        alert('Address copied to clipboard!');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className="min-h-screen flex items-center justify-center md:pt-6">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">DEPOSIT FUND</h2>
                <p className="text-red-500 text-sm mb-4">*Please select one of the below listed cryptocurrency addresses:</p>
                <div className="flex gap-2 mb-4">
                    {Object.keys(cryptoAddresses).map((crypto) => (
                        <button
                            key={crypto}
                            className={`px-3 py-2 rounded ${selectedCrypto === crypto ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
                            onClick={() => setSelectedCrypto(crypto as 'BTC' | 'ETH' | 'USDT' | 'BNB')}
                        >
                            {crypto}
                        </button>
                    ))}
                </div>
                <p>Please scan or copy the address below to deposit {selectedCrypto}.</p>
                <p className="font-bold mb-4">{selectedCrypto} Minimum deposit: 0.001 {selectedCrypto}</p>
                <div className="flex justify-center mb-4">
                    <QRCode value={cryptoAddresses[selectedCrypto].qr} />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <input
                        type="text"
                        value={cryptoAddresses[selectedCrypto].address}
                        readOnly
                        className="w-full bg-[#e2ebf7] flex-1 p-2 border rounded"
                    />
                    <button onClick={handleCopyAddress} className="ml-2 p-2 bg-primary text-white rounded">
                        <FiCopy size={20} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1">Amount</label>
                        <input type="number" required className="w-full bg-[#e2ebf7] p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block mb-1">Wallet</label>
                        <input type="text"  required className="w-full bg-[#e2ebf7] p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block mb-1">Deposit Proof</label>
                        <input type="file" required className="w-full bg-[#e2ebf7] p-2 border rounded" />
                    </div>
                    <button type="submit" className="w-full bg-primary text-white p-2 rounded">Confirm Deposit</button>
                </form>
                <p className="text-xs text-center text-gray-500 mt-4">*Once we confirm your payment and it's verified, your account will be funded.</p>
            </div>
        </div>
    );
};

export default CryptoDeposit;
