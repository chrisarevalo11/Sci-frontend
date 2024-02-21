import { BytesLike, ethers } from 'ethers'

import contractsJson from '@/assets/json/deployments/bsctestnet/deployments.json'
import { roundsApiFirebase } from '@/middlewares/firebase/round.firebase.middleware'
import { Round } from '@/models/round.model'
import { GAS_LIMIT } from '@/utils/variables/constants'

import { getContracts } from '../getContracts'

function getPrivateKey(): string {
	if (!import.meta.env.VITE_WALLET1_PRIVATE_KEY) {
		throw new Error('VITE_WALLET_PRIVATE_KEY not found in .env file')
	}

	return import.meta.env.VITE_WALLET1_PRIVATE_KEY
}

function getRpcUrl(): string {
	if (!import.meta.env.VITE_BSC_TESTNET_RPC_URL) {
		throw new Error('VITE_BSC_TESTNET_RPC_URL not found in .env file')
	}

	return import.meta.env.VITE_BSC_TESTNET_RPC_URL
}

export function getRpcProvider(): ethers.JsonRpcProvider {
	// const rpcUrl: string = getRpcUrl()

	const rpcUrl = '/api'
	return new ethers.JsonRpcProvider(rpcUrl)
}

export async function createQvSimpleStrategyContract(): Promise<string> {
	try {
		const { addRound, getRoundsLength } = roundsApiFirebase()
		const privateKey: string = getPrivateKey()
		const rpcUrl: string = getRpcUrl()

		const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(rpcUrl)
		const signer: ethers.Wallet = new ethers.Wallet(privateKey, provider)
		const newRound = new ethers.ContractFactory(
			contractsJson.qVSimpleStrategyContract.abi,
			contractsJson.qVSimpleStrategyContract.bytecode,
			signer
		)

		const roundsLegth: number = await getRoundsLength()
		const id: number = roundsLegth + 1
		const idString: string = id.toString()

		const args: string[] = [
			contractsJson.alloInstance.address,
			`QV Simple Strategy ${id}`
		]

		const deployTx = await newRound.deploy(...args)
		const newRoundAddress = await deployTx.getAddress()

		const round: Round = {
			id: idString,
			address: newRoundAddress
		}

		await addRound(round)
		return newRoundAddress
	} catch (error) {
		console.error('Error creating QV Simple Strategy Contract: ', error)
		return 'Error creating QV Simple Strategy Contract'
	}
}

export async function registerRecipient(
	poolId: number,
	data: BytesLike
): Promise<string> {
	try {
		const { alloContract } = getContracts()
		const privateKey: string = getPrivateKey()
		const rpcUrl: string = getRpcUrl()

		const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(rpcUrl)
		const signer: ethers.Wallet = new ethers.Wallet(privateKey, provider)

		const registerRecipientTx = await alloContract
			.connect(signer)
			.registerRecipient(poolId, data, {
				gasLimit: GAS_LIMIT
			})

		await registerRecipientTx.wait()
		return 'SUCCESSFUL_MINTING_MESSAGE'
	} catch (error) {
		return 'FAILED_MINTING_MESSAGE'
	}
}

export async function reviewRecipients(
	recipientIds: string[],
	recipientStatuses: number[]
): Promise<string> {
	try {
		const { alloContract } = getContracts()
		const privateKey: string = getPrivateKey()
		const rpcUrl: string = getRpcUrl()

		const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(rpcUrl)
		const signer: ethers.Wallet = new ethers.Wallet(privateKey, provider)

		const reviewRecipientsTx = await alloContract
			.connect(signer)
			.reviewRecipients(recipientIds, recipientStatuses, {
				gasLimit: GAS_LIMIT
			})

		await reviewRecipientsTx.wait()
		return 'SUCCESSFUL_REVIEW_MESSAGE'
	} catch (error) {
		return 'FAILED_REVIEW_MESSAGE'
	}
}